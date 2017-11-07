var server = require('./server.js');
var router = require('./router.js');
var requestHandler = require('./requestHandler.js');

server.start(router.route, requestHandler.handle);
