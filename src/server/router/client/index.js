import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});

/* GET users page. */
router.get('/problems', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});

/* GET mypage */
router.get('/mypage', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});

/* GET rank page */
router.get('/rank', function(req, res, next) {
    res.render('index', { title: 'SIGO' })
});




export default router