import express from 'express'

import user from './users/users';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        result : "this is indexs / "
    });
});

router.use('/users', user);

export default router
