import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import controller from './users.controller';


const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
   res.send({
       result: 'hello'
   });
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
        username : req.body.username,
        userId : req.body.userid,
        password : req.body.password,
        studentCode : req.body.studentcode
    };

    // Validation
    const validation = user => {
        if (!userInfo.username || !userInfo.userId || !userInfo.password || !userInfo.studentCode) throw new Error('값이 입력되지 않았음');

        return user;
    };

    // Password Hash
    const hash = user => {
        const selt = Math.round((new Date().valueOf() * Math.random())) + "";
        const passwordHash = crypto.createHash("sha512").update(userInfo.password+selt);
    };

    // 아이디 체크 및 데이터 입력
    const create = user => {
        if (user) throw new Error('이미 사용중인 아이디');

        const passwordHash = controller.passwordHash(userInfo.password);

        return controller.create(userInfo.username, userInfo.userId, passwordHash, userInfo.studentCode);
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
        userId : req.body.userid,
        password : req.body.password
    };

    const secret = req.app.get('jwt-secret');

    const validation = user => {
        if (!userInfo.userId || !userInfo.password) throw new Error('값이 입력되지 않았음');

        return user;
    };

    const check = user => {
        if (!user) throw new Error('로그인 실패');

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
            throw new Error('로그인 실패');
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

