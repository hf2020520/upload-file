var http = require('http');
var url = require('url');

function start(route, handle){

  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname === '/favicon.ico'){

    }else{
      console.log("Request for " + pathname + " received.");
      route(handle, pathname, response, request);
    }
  }

  http.createServer(onRequest).listen(8080, function(){
    console.log('Server is starting on port 8080.')
  })
}

exports.start = start;
