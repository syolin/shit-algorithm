import express from 'express';
import passport from 'passport';
import xss from 'xss';

import controller from './users.controller';


const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
   res.send({
       result: 'hello'
   });
});

router.post('/signup', function(req, res, next) {

    // 요청 들어온 body 값
    const userInfo = {
        username : req.body.username,
        userId : req.body.userid,
        password : req.body.password,
        studentCode : req.body.studentcode
    };

    const create = (user) => {
        if(user) throw new Error('이미 사용중인 아이디');

        return controller.create(userInfo.username, userInfo.userId, userInfo.password, userInfo.studentCode);
    };

    const respond = () => {
        res.json({
            result: 'success',
            user : userInfo
        });
    };

    const onError = (error) => {
        res.status(409).json({
            result: 'error',
            message: error.message
        });
    };

    controller.findOneByUserId(userInfo.userId)
        .then(create)
        .then(respond)
        .catch(onError);

    /*
     { username:'홍길동', userid:'testid', password:'testpass', studentid:'20801' }
    */


});

export default router

