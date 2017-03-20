import express from 'express';
import request from 'request';

import solutionController from './solutions.controller';
import problemController from '../problems/problems.controoler';
import userController from '../users/users.controller';
import xssFilters from 'xss-filters';

import auth from '../../../modules/auth';

const router = express.Router();

/*
    모든 결과 출력
    ㄴ 어드민 일경우 해당 결과에 대한 모든 정보 출력
 */
router.get('/',auth.isAuthenticated(), function (req, res) {

    // 어드민 체크
    let value = req.user.rating == '3' ? true : false;

    const respond = resolves => {
        res.json({
            result: 'success',
            resolves: resolves
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    solutionController.findAll(value)
        .then(respond)
        .catch(onError);

});
/*
 문제 정답 결과 출력
 */
router.get('/resultsuccess',auth.isAuthenticated(), function (req, res) {

    const userId = xssFilters.inHTMLData(req.params.userId);

    const validation = index => {
        if (!userId) throw new Error("validation error");

        return index;
    };

    const respond = resolves => {

        // 결과 출력 개수
        let successCount = resolves.length;

        res.json({
            result : successCount,
            resolves : resolves
        });

    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    solutionController.findSpecificResolve("success", req.user.userId)
        .then(validation)
        .then(respond)
        .catch(onError);
});

router.get('/findsuccess/:userId/:num',auth.isAuthenticated(), function (req, res) {
    const userId = xssFilters.inHTMLData(req.params.userId);
    const num = xssFilters.inHTMLData(req.params.num);

    const validation = index => {
        if (isNaN(req.params.num) || !userId) throw new Error("validation error");

        return index;
    };

    const respond = resolves => {

        // 결과 값
        let result = false;

        // 출력 값중 성공 결과 체크 및 결과 true
        for(let i=0; i < resolves.length; i++) {
            if (resolves[i].resolveData.result == 'success') {
                result = true;
            }
        };

        // userId 는 예외 처리
        if (userId == 'test') {
            result = false;
        };

        res.json({
            result : result
        });

    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    solutionController.findSuccess(userId, num)
        .then(validation)
        .then(respond)
        .catch(onError);
});

// router.get('/:name', function (req, res) {
//
//     const url = 'http://121.186.23.245:9989/code/' + req.params.name;
//     request(url, function (err, response, body) {
//         if (err) body=err;
//         res.send(body);
//     });
// });
// router.get('/:name/:scanf', function (req, res) {
//
//     const url = 'http://121.186.23.245:9989/code/' + req.params.name + '/' + req.params.scanf;
//     request(url, function (err, response, body) {
//         if (err) body=err;
//         res.send(body);
//     });
// });
// router.get('/test/:user/:num', function (req, res) {
//
//     const respond = users => {
//         res.json({
//             result: 'success',
//             users : users
//         })
//     };
//
//     const onError = error => {
//         res.status(409).json({
//             result: 'error',
//             message: error.message
//         });
//     };
//
//     solutionController.findSuccess(req.params.user, req.params.num)
//         .then(respond)
//         .catch(onError);
//
// });

/*
    문제 제출

    inputcode : 입력 받은 코드
    name : 컴파일 할 이름
    lang : 언어
    userid : 컴파일을 시도한 아이디
    problemnum : 컴파일을 시도할 문제
 */
router.post('/',auth.isAuthenticated(), function (req, res) {

    const form = {
        inputCode : req.body.inputcode,
        name : req.body.name,
        lang : req.body.lang,
        userId : req.user.userId,
        problemNum : req.body.problemnum
    };

    let resolveInfo = {
        userId : form.userId,
        resolveData : {
            language: form.lang,
            problemNum: form.problemNum,
            code: form.inputCode,
            result: '',
            compileName: '',
            date: new Date(),
            memory: 0,
            time: 0
        }
    };

    const contest = problem => {
        const check = (user) => {
            console.log("1 : "+user.contestAccount,",",problem.type);
            if (problem.type == "contest" && !user.contestAccount) throw new Error("아직 오픈되지 않았습니다.");
        };

        const validation = problem => {
            if (!form.inputCode || !form.name || !form.lang || !form.userId || isNaN(form.problemNum)) throw new Error("validation error");

            return problem;
        };

        // Not Found 예외 처리
        const earlyData = problem => {
            if (!problem) throw new Error("해당 문제가 없습니다.");

            return problem;
        };

        // 코드 제출 결과에 파일 또는 시스템 함수를 배제하기 위한 예외 처리
        const security = problem => {
            const commands = ['system','fcloseall','fdopen','fgetc','fgetchar','fgetpos','fopen','fputc','fputchar','fread','freopen','fseek','fsetpos','ftell','fwrite','getc','getw','putw','rename','rewind','tmpfile','tmpnam','unlink'];
            // for (let command in commands) {
            //     if (form.inputCode.indexOf(command) != -1) throw new Error("런타임 에러");
            // }
            return problem;
        };

        // 컴파일 콜백 함수
        const compileRequest = (problem, form, callback) => {
            const postUrl = 'http://121.186.23.245:9989/code/';
            request.post({url:postUrl, header: {'Authorization': req.headers.authorization}, form: form}, function (err, Response, body) {
                if (err) throw new Error(err);

                const resolve = JSON.parse(body);

                // 컴파일 에러가 있을경우 예외처리
                if (resolve.result != 'success') {

                    resolveInfo.resolveData.result = 'compile error',
                        resolveInfo.resolveData.compileName = resolve.name;

                    solutionController.create(resolveInfo.userId, resolveInfo.resolveData);

                    res.status(409).json({
                        result: 'compile error',
                        message: resolve.result
                    });
                    return;
                }

                const solutionApiUrl = 'http://121.186.23.245:9989/code/'+ resolve.name;

                /*
                 두번쨰 예제가 있을 경우, 두번째 예제로 정답을 체크
                 */
                let example;

                if (req.body.mode) {
                    example = {
                        input : problem.problemData.inputExample,
                        output : problem.problemData.outputExample
                    };
                } else {
                    example = {
                        input : problem.problemData.inputExample2 ? problem.problemData.inputExample2 : problem.problemData.inputExample,
                        output : problem.problemData.outputExample2 ? problem.problemData.outputExample2 : problem.problemData.outputExample
                    };
                }

                let url = example.input ? solutionApiUrl +'/'+ example.input : solutionApiUrl;

                callback({
                    form : form,
                    compileBody : resolve,
                    example : example,
                    score : problem.score,
                    type : problem.type,
                    url : url
                });

            });
        };


        // 실행 및 결과 함수
        const setRequest = problem => {
            // 정답일 경우 예외 처리
            request.get({url : 'https://algorithm.seoulit.kr/api/solution/findsuccess/'+form.userId+'/'+problem.num, headers: {'Authorization': req.headers.authorization}}, function (err, Response, body) {
                const bodyJson = JSON.parse(body || null);
                if (bodyJson.result) {
                    res.status(409).json({
                        result : 'error',
                        message : '이미 정답을 맞춘 문제입니다.'
                    });
                } else {
                    compileRequest(problem, form, function (data) {
                        // 컴파일 한 파일을 실행후 결과 확인
                        request.get({url: data.url, header: {'Authorization': req.headers.authorization}}, function (err, response, body) {
                            if (err) {
                                res.status(409).json({
                                    result: 'error',
                                    message: err
                                });
                                return;
                            };

                            // if (body.code.indexOf("ECONNRESET") != -1) throw new Error("한글에러");

                            // 제대로 값이 불러와지지 않았다면 null
                            const getResolve = JSON.parse(body || null);


                            // not found 예외 처리
                            if (getResolve.result.indexOf("not found") != -1) {
                                res.status(409).json({
                                    result: 'error',
                                    message: 'compile error'
                                });
                                return;
                            };


                            // 제출 하지 않고, 결과만 요청
                            if (req.body.mode) {
                                res.json({
                                    result: getResolve.result
                                });
                                return;
                            };

                            /*
                             정답 체크 후 응답
                             */
                            let result;

                            if (getResolve.result == data.example.output) {

                                result = 'success';

                                userController.scoreUpdate(form.userId, data.score, problem.type);

                                res.json({
                                    result: result
                                });
                            } else {

                                result = 'fail';

                                res.json({
                                    result: result
                                });
                            }

                            let resolveInfo = {
                                userId : form.userId,
                                resolveData : {
                                    language: form.lang,
                                    problemNum: form.problemNum,
                                    code: form.inputCode,
                                    result: result,
                                    compileName: data.compileBody.name,
                                    date: new Date(),
                                    memory: 0,
                                    time: 0
                                }
                            };

                            // 디비에 결과 저장
                            solutionController.create(resolveInfo.userId, resolveInfo.resolveData);

                        });
                    })
                }
            });


        };

        const onError = error => {
            res.status(409).json({
                result: 'error',
                message: error.message
            });
        };


        userController.findOneByUserId(req.user.userId)
            .then(check)
            .then(validation)
            .then(earlyData)
            .then(security)
            // .then(compileRequest)  키지마세
            .then(setRequest)
            .catch(onError);

        return problem;
    };

    problemController.findOneByProblem(form.problemNum)
        .then(contest);

});


export default router

