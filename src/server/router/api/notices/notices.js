import express from 'express';
import xssFilters from 'xss-filters';

import controller from './notices.controller';

import auth from '../../../modules/auth';

const router = express.Router();


/*
    모든 공지 출력
 */
router.get('/', function (req, res) {
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

/*
    해당 공지 삭제
 */
router.delete('/:num',auth.isAuthenticated('admin'), function (req, res) {

    const validation = index => {
        if (isNaN(req.params.num)) throw new Error("validation error");

        return index;
    };

    const respond = notice => {
        res.json({
            result: 'success',
            notice: notice
        });

        // 뒷 번호를 앞으로 정렬
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
    해당 공지 출력
 */
router.get('/:num', function (req, res) {

    const validation = index => {
        if (isNaN(req.params.num)) throw new Error("validation error");

        return index;
    };

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

    controller.findOneByProblem(req.params.num)
        .then(validation)
        .then(respond)
        .catch(onError);
});

/*
    해당 공지 수정
 */
router.put('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const form = {
        noticeNum : body.noticenum,
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

/*
    공지 등록
 */
router.post('/',auth.isAuthenticated('admin'), function (req, res) {
    const body = req.body;
    const noticeInfo = {
        noticeName : body.noticename,
        contents : body.contents,
        type : body.type,
        date : new Date()
    };

    // Validation
    if (!noticeInfo.noticeName || !noticeInfo.contents || !noticeInfo.type) {
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

    controller.create(noticeInfo.noticeName, noticeInfo.contents, noticeInfo.type, noticeInfo.date)
        .then(respond)
        .catch(onError);
});


export default router;

