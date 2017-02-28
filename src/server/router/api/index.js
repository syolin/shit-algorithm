import express from 'express'

// router
import user from './users/users';
import problem from './problems/problems';
import solution from './solutions/solutions';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        result : "this is indexs / "
    });
});

router.use('/users', user);

router.use('/problems', problem);

router.use('/solution', solution);


export default router