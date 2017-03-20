import express from 'express';
import xssFilters from 'xss-filters';
import request from 'request';

import controller from './users.controller';
import auth from '../../../modules/auth';
import captcha from '../../../modules/captcha';

const router = express.Router();

router.get('/',auth.isAuthenticated(), function (req, res) {

    let value = req.user.rating == '3' ? true : false;

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

    controller.findAll(value)
        .then(respond)
        .catch(onError);
});

// router.get('/captcha', function (req,res) {
//     captcha.signKey(function (key) {
//         if (key == 'error') throw new Error('captcha error');
//         const path = captcha.signImage(key);
//         if (path == 'error') {
//             res.json({
//                 result : 'error'
//             });
//         };
//         res.json({
//             result: 'success',
//             key : key,
//             path : captcha.signImage(key).path
//         });
//     });
// });
//
// router.get('/captcha/:key/:input', function (req, res) {
//     captcha.checkImage(req.params.key, req.params.input, function (value) {
//         if (value == 'error') {
//             res.status(403).json({
//                 result : 'error',
//                 message : 'api error'
//             });
//
//             return;
//         };
//
//         const valueJson = JSON.parse(value);
//
//         if(valueJson.result == true) {
//             res.json({
//                 result : 'true'
//             });
//         } else {
//             res.status(403).json({
//                 result : 'error',
//                 message : valueJson.errorMessage
//             });
//         };
//
//         console.log(valueJson);
//
//     });
// });

router.delete('/:id',auth.isAuthenticated('admin'), function (req, res) {

    const validation = index => {
        if (!req.params.id) throw new Error("validation error");

        return index;
    };

    const respond = user => {
        res.json({
            result: 'success',
            user : user
        })
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.deleteOne(req.params.userId)
        .then(validation)
        .then(respond)
        .catch(onError);
});

router.get('/contest/:bool', auth.isAuthenticated('admin'), function (req, res) {

    const respond = bool => {
        res.json({
            result: 'success',
            message : bool
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.contentUpdate(req.params.bool)
        .then(respond)
        .catch(onError);
});

/*
    GET /api/users/:id
    해당 유저 정보
 */
router.get('/search/:id',auth.isAuthenticated('admin'), function (req, res) {

    const validation = index => {
        if (!req.params.id) throw new Error("validation error");

        return index;
    };

    const respond = user => {
        res.json({
            result: 'success',
            users : user
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };
  
    controller.findOneByUserId(req.params.id)
        .then(validation)
        .then(respond)
        .catch(onError)
});

router.get('/non-account', auth.isAuthenticated('admin'), function (req, res) {
    const respond = users => {
        res.json({
            result: 'success',
            users : users
        });
    }

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    }

    controller.findSpecificUser('account')
        .then(respond)
        .catch(onError);
});

router.get('/my-info',auth.isAuthenticated(), function (req, res) {
    res.json({
        result: 'success',
        user : req.user
    });
});

/*
    GET /api/account/:id
    테스트 Account 인가 라우트
 */
// import mongoose from 'mongoose';
// import model from '../../../models/user.model';
// const User = mongoose.model('User');

router.get('/account/:user',auth.isAuthenticated('admin'), function (req, res) {

    const validation = index => {
        if (!req.params.user) throw new Error("validation error");

        return index;
    };

    const respond = user => {
        res.json({
            result : 'success'
        });
    };

    const onError = error => {
        res.status(409).json({
            result : 'error',
            message : error
        });
    };

    controller.accountTrue(req.params.user)
        .then(validation)
        .then(respond)
        .catch(onError);

});


/*
    POST /api/users/signup
    {
        username,
        userid,
        password,
        studentcode
    }
 */
router.post('/signup', function(req, res) {

    // 요청 들어온 body 값
    const userInfo = {
        username : xssFilters.inHTMLData(req.body.username),
        userId : xssFilters.inHTMLData(req.body.userid),
        password : xssFilters.inHTMLData(req.body.password),
        studentCode : xssFilters.inHTMLData(req.body.studentcode),
        captchaResponse : req.body.captcha
        // rating : xssFilters.inHTMLData(req.body.rating)
    };

    // Validation
    const validation = user => {
        if (!userInfo.username || !userInfo.userId || !userInfo.password || isNaN(userInfo.studentCode) /*|| isNaN(userInfo.rating)*/) throw new Error('validation error');

        var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        if (special_pattern.test(req.body.userid) == true || special_pattern.test(req.body.userid) == true) throw new Error('validation error');

        return user;
    }

    // const captcha = (user, callback) => {
    //     request.post({
    //         url: 'https://www.google.com/recaptcha/api/siteverify',
    //         form: {secret: '6LejvBgUAAAAAOVYE7DeBDxi-9Lev1dlmT7ca0fY', response: captcha}
    //     }, function (err, response, body) {
    //         const bodyJson = JSON.parse(body);
    //         console.log(bodyJson.success,(!bodyJson), bodyJson);
    //         callback(bodyJson.success);
    //     });
    //
    //
    // };

    // 아이디 체크 및 데이터 입력
    const create = user => {
        if (user) throw new Error('username exit');

        const accountFalse = false;
        const passwordHash = controller.passwordHash(userInfo.password);

        return controller.create(userInfo.username, userInfo.userId, passwordHash, userInfo.studentCode, accountFalse, 1/* 유저 등급 */);
    };

    const respond = user => {
        res.json({
            result: 'success',
            username : user.username
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.findOneByUserId(userInfo.userId)
        .then(validation)
        .then(create)
        .then(respond)
        .catch(onError);

});

router.post('/failReset', function (req, res) {
    const form = {
        userId : xssFilters.inHTMLData(req.body.userid),
        studentCode : xssFilters.inHTMLData(req.body.studentcode),
        username : xssFilters.inHTMLData(req.body.username)
    };

    const validation = user => {
        if (!form.userId || isNaN(form.studentCode) || !form.username) throw new Error('validation error');

        return user;
    };

    const check = user => {
        if(!user) throw new Error('not user');

        if(form.studentCode != user.studentCode || form.username != user.username) throw new Error('information wrong');

        return user;
    };

    const ratingUpdate = user => {
        controller.failRating(user.userId, 1);
    };

    const respond = () => {

        res.json({
            result : 'success',
        });
    };

    const onError = error => {
        res.status(403).json({
            result : 'error',
            message : error.message
        });
    };

    controller.findOneByUserId(form.userId)
        .then(validation)
        .then(check)
        .then(ratingUpdate)
        .then(respond)
        .catch(onError);
});

/*
    POST /api/users/signin
    {
        userid,
        password
    }
 */
router.post('/signin', function (req, res) {

    const secret = req.app.get('jwt-secret');

    const userInfo = {
        userId : xssFilters.inHTMLData(req.body.userid),
        password : xssFilters.inHTMLData(req.body.password),
        captchaKey : xssFilters.inHTMLData(req.body.captchakey),
        captchaInput : xssFilters.inHTMLData(req.body.captchainput)
    };

    const validation = user => {
        if (!userInfo.userId || !userInfo.password || !userInfo.captchaInput || !userInfo.captchaKey) throw new Error('validation error');

        return user;
    };

    const captcha = user => {

    };


    const check = user => {
        if (!user) throw new Error('login fail');

        if(user.failRating >= 5) {
            throw new Error('fail rating excess');
        };

        const passwordHash = controller.passwordHash(userInfo.password);
        if (passwordHash != user.password) {
            controller.failRating(userInfo.userId, 0);
            throw new Error('login fail');
        };

        // 승인 처리 확인
        if(user.account == false) {
            throw new Error('account false');
        } else {
            controller.failRating(userInfo.userId, 1);
            return user;
        }
    };

    const token = user => {
        // Password Hash 인증
        if (user.password === controller.passwordHash(userInfo.password)) {
            return auth.signToken(user, secret);

            throw new Error('login token fail');
        }
    };

    const respond = result => {
        res.json({
            result : 'success',
            token : result

        });
    };

    const onError = error => {
        res.status(403).json({
            result : 'error',
            message : error.message
        });
    };

    controller.findOneByUserId(userInfo.userId)
        .then(validation)
        .then(check)
        .then(token)
        .then(respond)
        .catch(onError);
});



export default router

