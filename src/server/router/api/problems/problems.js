import express from 'express';
import xssFilters from 'xss-filters';

import controller from './problems.controoler';

import auth from '../../../modules/auth';

const router = express.Router();


router.get('/', function (req, res) {
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

router.get('/:num', function (req, res) {

    const problemNum = xssFilters.inHTMLData(req.params.num);

    const respond = problem => {
        res.json({
            result: 'success',
            problem: problem,
            submission: "제공전"
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message : error.message
        });
    };

    controller.findOneByProblem(problemNum)
        .then(respond)
        .catch(onError);
});

router.post('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const problemInfo = {
        problemName : body.problemname,
        source : body.source,
        explanation : body.explanation,
        score : body.score,
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
    const validation = problem => {
        if (!problemInfo.problemName || !problemInfo.source || !problemInfo.explanation || isNaN(problemInfo.score) ||
            !problemInfo.problemData.inputExample || !problemInfo.problemData.outputExample ||
            !problemInfo.problemData.inputExample2 || !problemInfo.problemData.outputExample2 ||
            isNaN(problemInfo.problemData.timeLimit) || isNaN(problemInfo.problemData.memoryLimit)) throw new Error('validation error');

        return problem;
    }

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
    controller.create(problemInfo.problemName, problemInfo.source, problemInfo.explanation, problemInfo.score, problemInfo.problemData)
        .then(respond)
        .catch(onError);
});


export default router;