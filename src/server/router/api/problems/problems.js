import express from 'express';
import xssFilters from 'xss-filters';
import request from 'request';

import controller from './problems.controoler';

import auth from '../../../modules/auth';

const router = express.Router();


/*
    모든 문제 출력
 */
router.get('/',auth.isAuthenticated(), function (req, res) {
    const respond = problems => {
        res.json({
            result: 'success',
            problems : problems
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message: error.message
        });
    };

    controller.findAll()
        .then(respond)
        .catch(onError);
});

/*
    해당 문제 삭제
 */
router.delete('/:num',auth.isAuthenticated('admin'), function (req, res) {


    const respond = problem => {
        res.json({
            result: 'success',
            problem : problem
        });

        // 뒷 문제를 앞으로 정렬
        // controller.updateSortNum(req.params.num);
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.deleteOne(req.params.num)
        .then(respond)
        .catch(onError);
});

/*
    해당 문제 출력
 */
router.get('/:num',auth.isAuthenticated(), function (req, res) {

    const respond = problem => {
        res.json({
            result: 'success',
            problem: problem
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message : error.message
        });
    };

    controller.findOneByProblem(req.params.num)
        .then(respond)
        .catch(onError);
});


/*
    테스트용
 */
router.get('/updatesort/:num', auth.isAuthenticated('admin'), function (req, res) {

    const respond = problem => {
        res.json({
            result: 'success',
            problem: problem
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message : error.message
        });
    };

    controller.updateWantNum(req.params.num)
        .then(respond)
        .catch(onError);
});

/*
    해당 문제 수정
 */
router.put('/',auth.isAuthenticated(), function (req, res) {
    const body = req.body;
    const form = {
        problemNum : body.problemnum,
        problemName : body.problemname,
        source : body.source,
        explanation : body.explanation,
        score : body.score,
        type : body.type,
        problemData : {
            inputExample : body.inputexample,
            outputExample : body.outputexample,
            inputExample2: body.inputexample2,
            outputExample2 : body.outputexample2,
            timeLimit : body.timelimit,
            memoryLimit : body.memorylimit
        }
    };

    if (!form.problemName || isNaN(form.problemNum) || !form.source || !form.explanation || isNaN(form.score)
        || !form.type || isNaN(form.problemData.timeLimit) || isNaN(form.problemData.memoryLimit)) {
        res.status(403).json({
            result : 'error',
            message : 'validation error'
        });

        return;
    }

    const respond = problem => {
        res.json({
            result: 'success',
            problem : problem
        });
    }

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    }

    controller.updateOne(form)
        .then(respond)
        .catch(onError);
});

/**
    문제 등록

    problemname : 문제 이름
    source : 출처
    explantion : 문제 설명
    inputexample : 입력 되는 값 및 예제
    outputexample : 출력 검사 값 및 예제
    inputexample2 : 입력 되는 값 및 예제
    outputexample2 : 출력 검사 값 및 예제
    timelimit : 시간 제한
    memorylimit : 메모리 제한
 */
router.post('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const problemInfo = {
        problemName : body.problemname,
        source : body.source,
        explanation : body.explanation,
        score : body.score,
        type : body.type,
        problemData : {
            inputExample : body.inputexample,
            outputExample : body.outputexample,
            inputExample2: body.inputexample2,
            outputExample2 : body.outputexample2,
            timeLimit : body.timelimit,
            memoryLimit : body.memorylimit
        }
    };

    // Validation
    if (!problemInfo.problemName || !problemInfo.source || !problemInfo.explanation ||
        isNaN(problemInfo.problemData.timeLimit) || isNaN(problemInfo.problemData.memoryLimit)) {
        res.status(403).json({
            result : 'error',
            message : 'validation error'
        });

        return;
    };

    const respond = problem => {
        res.json({
            result: 'success',
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    /**
     *
     *
     *
     *
     *  Auto increment error 수정
     *
     *
     *
     */
    controller.create(problemInfo.problemName, problemInfo.source, problemInfo.explanation, problemInfo.score, problemInfo.type, problemInfo.problemData)
        .then(respond)
        .catch(onError);
});


export default router;