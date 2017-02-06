import express from 'express'

// Users router
import user from './users/users';

// Problems router
import problem from './problems/problems';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        result : "this is indexs / "
    });
});

router.use('/users', user);

router.use('/problems', problem);

export default router
