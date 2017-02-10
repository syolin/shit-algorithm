// module loader
import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import mongoose from 'mongoose';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// router
import router from './router/client/index';
import api from './router/api/index';
import apiUsers from './router/api/users/users';
// webpack config
import config from '../../webpack.config';

// config.js
import mongoConfig from './config';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// JWT Setting
app.set('jwt-secret', mongoConfig.secret);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

mongoose.connect(mongoConfig.mongodbUri);
const database = mongoose.connection;
database.on('error', console.error);
database.once('open', () => {
    console.log('Connected to mongodb server');
});



// client router
app.use('/', router);

//api router
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err)
});

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  })
});

http.createServer(app).listen(9999);
https.createServer(options, app).listen(443);

export default app
