import express from 'express';
import xssFilters from 'xss-filters';

import controller from './users.controller';
import auth from '../../../modules/auth';

const router = express.Router();

router.get('/', function (req, res) {
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

   controller.findAll()
       .then(respond)
       .catch(onError);
});

/*
    GET /api/users/:id
    해당 유저 정보
 */
// router.get('/:id', function (req, res) {
//
//     const param = xssFilters.inHTMLData(req.params.id);
//
//     const respond = user => {
//
//     };
//
//     const onError = error => {
//
//     };
//
//     controller.findOneByUserId(param)
//         .then(respond)
//         .then(onError)
// });


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

router.get('/mypage', auth.isAuthenticated(), function (req, res) {
    res.json({
        result: 'success',
        user : req.user
    });
});

router.get('/my-info', auth.isAuthenticated(), function (req, res) {
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

    const respond = user => {
        res.json({
            user : user.account
        });
    };

    const onError = error => {
        res.status(409).json({
            result : error
        });
    };

    controller.accountTrue(req.params.user)
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
        // rating : xssFilters.inHTMLData(req.body.rating)
    };

    // Validation
    const validation = user => {
        if (!userInfo.username || !userInfo.userId || !userInfo.password || isNaN(userInfo.studentCode) /*|| isNaN(userInfo.rating)*/) throw new Error('validation error');

        return user;
    }

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
        password : xssFilters.inHTMLData(req.body.password)
    };

    const validation = user => {
        if (!userInfo.userId || !userInfo.password) throw new Error('validation error');

        return user;
    };

    const check = user => {
        if (!user) throw new Error('login user fail');

        const passwordHash = controller.passwordHash(userInfo.password);
        if (passwordHash != user.password) throw new Error('password Error');

        // 승인 처리 확인
        if(user.account == false)
            throw new Error('account false');
        else
            return user;
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

