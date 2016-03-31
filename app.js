"use strict"
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var logger = require('log4js').getLogger();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var db = require("./models/db");
var RedisStore = require('connect-redis')(session);
var Redis = require('ioredis');
var redis = new Redis();


//var sessionChecker = require("./middlewares/sessionChecker");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(require('node-compass')({mode: 'expanded'}));

app.use(session({
  /*store: new RedisStore({
    client: redis
  }),*/
  secret: 'ssshhhhh',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/tmp/",express.static('/tmp/'));
app.use("/subdomains/",express.static(path.join(__dirname, 'public')));
app.use( require('express-subdomain-handler')({ baseUrl:process.env.DOMAIN_NAME , prefix: 'subdomains', logger: true }) );


//app.use(sessionChecker);

let routesList = ["", "users","restaurants","components","subdomains"];
for(let route of routesList) {
  logger.info("Adding route /" + route);
  app.use('/' + route, require("./routes/" + route))
}


let subDomainRoutesList =["restaurants"];
for(let route of subDomainRoutesList) {
  logger.info("Adding route /subdomains/:subdomain/" + route);
  app.use('/subdomains/:subdomain/'+ route, require("./routes/" + route))
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
