import express from 'express';
import xssFilters from 'xss-filters';
import request from 'request';

import controller from './problems.controoler';
import userController from '../users/users.controller';

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

    controller.findAll("normal")
        .then(respond)
        .catch(onError);
});

/**
 * 대회용
 */
router.get('/contest',auth.isAuthenticated(), function (req, res) {

    const contest = problems => {
        const check = user => {
            if (user.rating != 3 && !user.contestAccount) throw new Error("아직 오픈되지 않았습니다.");
        };

        const respond = () => {
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

        userController.findOneByUserId(req.user.userId)
            .then(check)
            .then(respond)
            .catch(onError);

        return problems;
    }

    controller.findAll("contest")
        .then(contest)
});
/*
    해당 문제 삭제
 */
router.delete('/:num',auth.isAuthenticated('admin'), function (req, res) {

    const validation = index => {
        if (isNaN(req.params.num)) throw new Error("validation error");

        return index;
    };

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
        .then(validation)
        .then(respond)
        .catch(onError);
});

/*
    해당 문제 출력
 */
router.get('/:num',auth.isAuthenticated(), function (req, res) {

    let value = req.user.rating == '3' ? true : false;

    const contest = problem => {

        const check = user => {
            if ( user.rating != 3 && problem.type == "contest" && !user.contestAccount) throw new Error("아직 오픈되지 않았습니다.");
        };

        const validation = index => {
            if (isNaN(req.params.num)) throw new Error("validation error");

            return index;
        };

        const respond = user => {
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

        userController.findOneByUserId(req.user.userId)
            .then(check)
            .then(validation)
            .then(respond)
            .catch(onError);

        return problem;
    };


    controller.findOneByProblem(req.params.num, value)
        .then(contest);
});

/*
    해당 문제 수정
 */
router.put('/',auth.isAuthenticated('admin'), function (req, res) {
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
        !problemInfo.inputExample || !problemInfo.inputExample2 || !problemInfo.outputExample || !problemInfo.outputExample2 ||
        isNaN(problemInfo.problemData.timeLimit) || isNaN(problemInfo.problemData.memoryLimit)) {
        res.status(403).json({
            result : 'error',
            message : 'validation error'
        });

        return;
    };

    const respond = () => {
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