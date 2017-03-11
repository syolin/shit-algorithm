import express from 'express'
import auth from '../../modules/auth';

// router
import user from './users/users';
import problem from './problems/problems';
import solution from './solutions/solutions';
import notice from './notices/notices';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        result : "this is indexs / "
    });
});

router.get('/test', function (req, res) {
    res.json({
        result : req.cookies
    });
});

router.use('/users', user);

router.use('/problems', problem);

router.use('/solution', solution);

router.use('/notices', notice);


export default router