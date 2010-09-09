/****************************************************
* Setup TAPAS
*****************************************************/

var tapas = require('./src').tapas;
var log = tapas.log;

/****************************************************
* Setup some logging using log4js
*****************************************************/

log.addAppender(log.consoleAppender(), 'tapas-news-wrapper');
var logger = log.getLogger('tapas-news-wrapper');
logger.setLevel('INFO');

/****************************************************
* Setup server
*****************************************************/

tapas.server.listen(tapas.port);
logger.info('Tapas being served on port ' + tapas.port);