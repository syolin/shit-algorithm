import express from 'express'

const api = express.Router();

/* GET home page. */
api.get('/', function(req, res, next) {
    res.json({
        success: "hi"
    });
});
api.get('/users', function(req, res, next) {
    res.json({
        success: "hi"
    });
});
api.get('/users2', function(req, res, next) {
    res.json({
        success: "hi"
    });
});

export default api
