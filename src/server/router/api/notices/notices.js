import express from 'express';
import request from 'request';

import controller from './notices.controller';

import auth from '../../../modules/auth';

const router = express.Router();

router.get('/',auth.isAuthenticated(), function (req, res) {
    const respond = notices => {
        res.json({
            result: 'success',
            notices : notices
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

router.delete('/:num',auth.isAuthenticated('admin'), function (req, res) {

    const respond = notice => {
        res.json({
            result: 'success',
            notice: notice
        })
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

router.get('/:num',auth.isAuthenticated(), function (req, res) {

    const noticeNum = xssFilters.inHTMLData(req.params.num);

    const respond = notice => {
        res.json({
            result: 'success',
            notice: notice,
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message : error.message
        });
    };

    controller.findOneByProblem(noticeNum)
        .then(respond)
        .catch(onError);
});

router.put('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const form = {
        noticeNum : body.noticemnum,
        noticeName : body.noticename,
        contents : body.contents,
        date : new Date()
    };

    if (!form.noticeName || isNaN(form.noticeNum) || !form.contents) {
        res.status(403).json({
            result : 'error',
            message : 'validation error'
        });

        return;
    };

    const respond = notice => {
        res.json({
            result: 'success',
            notice : notice
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.updateOne(form)
        .then(respond)
        .catch(onError);
});

router.post('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const noticeInfo = {
        noticeName : body.noticename,
        contents : body.contents,
        date : new Date()
    };
    // Validation
    if (!noticeInfo.noticeName || !noticeInfo.contents) {
        res.status(403).json({
            result : 'error',
            message : 'validation error'
        });

        return;
    };

    const respond = notice => {
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
    controller.create(noticeInfo.noticeName, noticeInfo.contents, noticeInfo.date)
        .then(respond)
        .catch(onError);
});


export default router;

