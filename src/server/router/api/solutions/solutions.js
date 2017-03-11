import express from 'express';
import request from 'request';

import solutionController from './solutions.controller';
import problemController from '../problems/problems.controoler';
import userController from '../users/users.controller';
import xssFilters from 'xss-filters';

import auth from '../../../modules/auth';

const router = express.Router();

router.get('/',auth.isAuthenticated('admin'), function (req, res) {
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

    solutionController.findAll(true)
        .then(respond)
        .catch(onError);
});

router.get('/normal', function (req, res) {
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

    solutionController.findAll()
        .then(respond)
        .catch(onError);
});

router.get('/test/:user/:num', function (req, res) {

    const respond = users => {
        res.json({
            result: 'success',
            users : users
        })
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    solutionController.findSuccess(req.params.user, req.params.num)
        .then(respond)
        .catch(onError);

});


router.post('/', function (req, res) {

    const form = {
        inputCode : req.body.inputcode,
        name : req.body.name,
        lang : req.body.lang,
        userId : req.body.userid,
        problemNum : req.body.problemnum
    };

    const validation = problem => {
        if (!form.inputCode || !form.name || !form.lang || !form.userId || isNaN(form.problemNum)) throw new Error("validation error");

        return problem;
    };

    const earlyData = problem => {
        if (!problem) throw new Error("해당 문제가 없습니다.");

        return problem;
    };

    const security = problem => {
        if (form.inputCode.indexOf("system") != -1) throw new Error("코드 내부에 system 을 사용할 수 없습니다.");

        return problem;
    };

    const compileRequest = (problem, form, callback) => {
        const postUrl = 'http://121.186.23.245:9989/code/';
        request.post({url:postUrl, form: form}, function (err, Response, body) {
            if (err) throw new Error(err);

            const resolve = JSON.parse(body);

            if (resolve.result != 'success') {
                res.status(409).json({
                    result: 'compile error',
                    message: resolve.result
                });

                return;
            }

            const solutionApiUrl = 'http://121.186.23.245:9989/code/'+ resolve.name;

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
                url : url
            });

        });
    };

    const setRequest = problem => {

        request.get('http://localhost:9999/api/solution/findsuccess/'+form.userId+'/'+problem.num, function (err, Response, body) {
            const bodyJson = JSON.parse(body);
            if (bodyJson.result) {
                res.status(409).json({
                    result : 'error',
                    message : '이미 정답을 맞춘 문제입니다.'
                });
            } else {
                compileRequest(problem, form, function (data) {
                    request.get(data.url, function (err, response, body) {
                        if (err) {
                            res.status(409).json({
                                result : 'error',
                                message : err
                            });

                            return;
                        }

                        // if (body.code.indexOf("ECONNRESET") != -1) throw new Error("한글에러");

                        const getResolve = JSON.parse(body || null);

                        if (getResolve.result.indexOf("not found") != -1) {
                            res.status(409).json({
                                result: 'error',
                                message: 'compile error'
                            });

                            return;
                        }


                        // 제출 하지 않고, 결과만 요청
                        if (req.body.mode) {
                            res.json({
                                result: getResolve.result
                            });

                            return;
                        }

                        let result;

                        if (getResolve.result == data.example.output) {

                            result = 'success';

                            userController.scoreUpdate(form.userId, data.score);

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
                            userId : req.body.userid,
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

    problemController.findOneByProblem(form.problemNum)
        .then(validation)
        .then(earlyData)
        .then(security)
        // .then(compileRequest)  키지마세
        .then(setRequest)
        .catch(onError);


});

router.get('/findsuccess/:userId/:num', function (req, res) {
    const userId = xssFilters.inHTMLData(req.params.userId);
    const num = xssFilters.inHTMLData(req.params.num);

    const respond = resolves => {

        let result = false;

        for(let i=0; i < resolves.length; i++) {
            if (resolves[i].resolveData.result == 'success') {
                result = true;
            }
        }

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
export default router

