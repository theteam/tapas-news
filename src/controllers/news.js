/****************************************************
* Setup some logging using log4js
*****************************************************/
var log = module.parent.exports.tapas.log; 
log.addAppender(log.fileAppender('log/app.log'), 'controller.news');
// get specified log and set minimum logging level  
var logger = log.getLogger('controller.news');
logger.setLevel('INFO');
/****************************************************
* Get the model
*****************************************************/
var User = require('../models/news');
/****************************************************
* Setup controller logic
*****************************************************/
var tapas = module.parent.exports.tapas;
tapas.controller = tapas.controller || {};
tapas.controller.news = tapas.controller.news || {};

tapas.controller.news.index = function(req, res){
	res.render('news_list.ejs');
};

module.exports = tapas.controller.news;
