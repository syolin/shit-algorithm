import request from 'request';
import fs from 'fs';

const client_id = 'Dd0e_KHw3RZjNMBCE_yP';
const client_secret = 'N484jhUWVq';

const captcha = {
    signKey : (callback) => {
        const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=0';
        const options = {
            url: api_url,
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
        request.get(options, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                const jsonBody = JSON.parse(body);
                callback(jsonBody.key)
            } else {
                callback('error');
            };
        });
    },
    signImage : (key) => {
        const api_url = 'https://openapi.naver.com/v1/captcha/ncaptcha.bin?key=' + key;
        const options = {
            url: api_url,
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
        const dt = new Date();
        const dateName = dt.getFullYear()+(dt.getMonth()+1)+dt.getDate()+dt.getTime();
        const writeStream = fs.createWriteStream('./etc/captcha/'+dateName+'.jpg');
        const _req = request.get(options).on('response', function(response) {
            if (response.statusCode != 200) {
                return 'error';
            }
        });

        return _req.pipe(writeStream);
    },
    checkImage : (key,inputValue, callback) => {
        const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=1' + '&key=' + key + '&value=' + inputValue;
        const options = {
            url: api_url,
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
        request.get(options, function (err, response, body) {
            if (err) {
                callback('error');
            } else {
                callback(body);
            };
        });
    }
};

export default captcha;
