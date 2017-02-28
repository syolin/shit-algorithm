import express from 'express';
import request from 'request';

import controller from './solutions.controller';

const router = express.Router();

router.post('/', function (req, res) {

    var form = {
        inputCode : req.body.inputcode,
        name : req.body.name,
        lang : req.body.lang
    };

    var url = 'http://121.186.23.245:9989/code/';
    request.post({url:url, form: form}, function (err, response, body) {
        if (err) body=err;

        res.send(body);
    })
});

router.get('/:name', function (req, res) {

    var url = 'http://121.186.23.245:9989/code/' + req.params.name;
    request(url, function (err, response, body) {
        if (err) body=err;
        res.send(body);
    });
});
router.get('/:name/:scanf', function (req, res) {

    var url = 'http://121.186.23.245:9989/code/' + req.params.name + '/' + req.params.scanf;
    request(url, function (err, response, body) {
        if (err) body=err;
        res.send(body);
    });
});
export default router

