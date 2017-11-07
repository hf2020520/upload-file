var fs = require('fs');
var formidable = require('formidable');
// var util = require('util');

function upload(response, request){
  if(request.method.toLowerCase() === 'get'){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("404 Not found.");
    response.end();
  } else{
    console.log("Request handler 'upload' was called.");
    // console.log(util.inspect(request));
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/upload';
    form.parse(request, function(err, fields, files){
      fs.renameSync(files.MyFile.path, "tmp/test.png");
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write('recceived image: <br/>');
      response.write('<img src="/show">');
      response.end();
    })
  }
}

exports.upload = upload;
