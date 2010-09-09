
/****************************************************
* Setup some logging using log4js
*****************************************************/
// create log directory if required
var fs = require('fs');
fs.mkdir('log', 0700);
// bring in module, have to reference directly as not called 'index.js'
var log4js = require('../modules/log4js-node/lib/log4js');
// create logging appenders
log4js.addAppender(log4js.fileAppender('log/app.log'), 'tapas-news');
// get specified log and set minimum logging level  
var logger = log4js.getLogger('tapas-news');
logger.setLevel('INFO');
// giddy up
logger.info('ready...');

/****************************************************
* Setup ExpressJs
*****************************************************/

// node dependencies
var sys = require('sys');

// module dependencies
// filesystem references are post correct after running ndistro
var express = require('../modules/express');
var ejs = require('../modules/ejs');

// config
var app = express.createServer();
app.use(express.staticProvider(__dirname + '/public'));
app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

// Here we use the bodyDecoder middleware
// to parse urlencoded request bodies
// which populates req.body
app.use(express.bodyDecoder());

// Required by session
app.use(express.cookieDecoder());

// The methodOverride middleware allows us
// to set a hidden input of _method to an arbitrary
// HTTP method to support app.put(), app.del() etc
app.use(express.methodOverride());

/****************************************************
* Setup tapas
*****************************************************/

// Our Tapas module.
exports.tapas = tapas = {};
tapas.port = 3000;
tapas.server = app;
tapas.example = {};
tapas.example.name = "News App";
tapas.example.version = 0.1;
tapas.log = log4js;

/****************************************************
* Setup controllers
*****************************************************/

var news_controller = require('./controllers/news');

/****************************************************
* API Routes
*****************************************************/

app.get('/', news_controller.index);
