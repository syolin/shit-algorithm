import express from 'express';
import request from 'request';

import solutionController from './solutions.controller';
import problemController from '../problems/problems.controoler';

const router = express.Router();

router.get('/', function (req, res) {
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

    const security = problem => {
        if (form.inputCode.indexOf("system") != -1) throw new Error("코드 내부에 system 을 사용할 수 없습니다.");

        return problem;
    };

    const compileRequest = (problem, form, callback) => {
        const postUrl = 'http://121.186.23.245:9989/code/';
        request.post({url:postUrl, form: form}, function (err, Response, body) {
            if (err) {
                res.json({
                    result : 'error',
                    message : err
                });

                return;
            }

            const resolve = JSON.parse(body);

            if (resolve.result != 'success') {
                res.status(409).json({
                    result: 'error',
                    message: resolve.result
                });

                return;
            }

            const solutionApiUrl = 'http://121.186.23.245:9989/code/'+ resolve.name;
            const example = {
                input : problem.problemData.inputExample2 ? problem.problemData.inputExample2 : problem.problemData.inputExample,
                output : problem.problemData.outputExample2 ? problem.problemData.outputExample2 : problem.problemData.outputExample
            }
            let url = example.input ? solutionApiUrl +'/'+ example.input : solutionApiUrl;


            callback({
                form : form,
                compileBody : resolve,
                example : example,
                url : url
            });

        });
    };

    const setRequest = problem => {

        compileRequest(problem, form, function (data) {
            request.get(data.url, function (err, response, body) {
                if (err) res.json({
                    result : err
                });

                const getResolve = JSON.parse(body);

                if (getResolve.code) {
                    res.status(409).json({
                        result: 'error',
                        message: 'code in error'
                    });

                    return;
                }

                if (getResolve.result.indexOf("not found") != -1) {
                    res.status(409).json({
                        result: 'error',
                        message: 'compile error'
                    });

                    return;
                }

                let result;

                if (getResolve.result == data.example.output) {

                    result = 'success';

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

    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    problemController.findOneByProblem(form.problemNum)
        .then(validation)
        .then(security)
        // .then(compileRequest)
        .then(setRequest)
        .catch(onError);


});

router.get('/:name', function (req, res) {

    const url = 'http://121.186.23.245:9989/code/' + req.params.name;
    request(url, function (err, response, body) {
        if (err) body=err;
        res.send(body);
    });
});
router.get('/:name/:scanf', function (req, res) {

    const url = 'http://121.186.23.245:9989/code/' + req.params.name + '/' + req.params.scanf;
    request(url, function (err, response, body) {
        if (err) body=err;
        res.send(body);
    });
});
export default router

