var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var favicon = require('serve-favicon');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
var streamviewRouter = require('./routes/streamview');
var channelviewRouter = require('./routes/channelview');
var uploadRouter = require('./routes/upload');
var connectHistoryApiFallback = require('connect-history-api-fallback');

var mongooseConnect = require('./server/mongoose');
var mysqlConnect = require('./server/mysql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(connectHistoryApiFallback());
app.use(express.static(path.join(__dirname, 'public')));

mongoDB = mongooseConnect();
mysqlDB = mysqlConnect();
app.use(mongoDB);
app.use(mysqlDB);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.user('/streamview', streamviewRouter);
app.user('/channelview', channelviewRouter);
app.user('/upload', uploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
