import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});
/* GET users page. */
router.get('/users', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});



export default router