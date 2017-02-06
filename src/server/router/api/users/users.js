import express from 'express';
import jwt from 'jsonwebtoken';
import xssFilters from 'xss-filters';

import controller from './users.controller';


const router = express.Router();

router.get('/', function (req, res) {
   res.send({
       result: 'This is Users api router'
   });
});

/*
    GET /api/account/:id
    테스트 Account 인가 라우트
 */
router.get('/account/:id', function (req, res) {

    const param = xssFilters.inHTMLData(req.params.id);

    const account = user => {
        controller.accountTrue(user.userId);
        return user;
    };

    const respond = user => {
        res.json({
            result: 'success',
            message: {
                username: user.username,
                userId: user.userId
            }
        });
    };

    const onError = error => {
        res.status(409).json({
            result: 'error',
            user : error.message
        })
    };

    controller.findOneByUserId(param)
        .then(account)
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
        studentCode : xssFilters.inHTMLData(req.body.studentcode)
    };

    // Validation
    const validation = user => {
        if (!userInfo.username || !userInfo.userId || !userInfo.password || isNaN(userInfo.studentCode)) throw new Error('validation error');

        return user;
    };

    // 아이디 체크 및 데이터 입력
    const create = user => {
        if (user) throw new Error('username exit');

        const accountFalse = false;
        const passwordHash = controller.passwordHash(userInfo.password);

        return controller.create(userInfo.username, userInfo.userId, passwordHash, userInfo.studentCode, accountFalse);
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

    const userInfo = {
        userId : xssFilters.inHTMLData(req.body.userid),
        password : xssFilters.inHTMLData(req.body.password)
    };

    const secret = req.app.get('jwt-secret');

    const validation = user => {
        if (!userInfo.userId || !userInfo.password) throw new Error('validation error');

        return user;
    };

    const check = user => {
        if (!user) throw new Error('login fail');

        if(user.account == false) throw new Error('account false');

        if (user.password === controller.passwordHash(userInfo.password)) {
            const loginPromise = new Promise((resolve, reject) => {
                jwt.sign(
                    {
                        _id: user._id,
                        userId: user.userId
                    },
                    secret,
                    {
                        expiresIn: '1d'
                    }, (err, token) => {
                        if (err) reject(err);
                        resolve(token);
                    });
            });
            return loginPromise;

        } else {
            throw new Error('login fail');
        }
    };

    const respond = token => {
        res.json({
            result : 'success',
            token : token
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
        .then(respond)
        .catch(onError);
});



export default router

