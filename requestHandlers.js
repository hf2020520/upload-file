var exec = require('child_process').exec;
function start(response) {
  console.log("Request handler 'start' was called.")
/*  function sleep(milliSecons) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSecons);
  }
  sleep(1000);*/
  var content = "empty";
  exec('ipconfig',{encoding:'gbk'}, function (error, stdout, stderr) {
    if(error){
      console.log(error)
    }else{
      content = stdout || stderr;
      console.log(content);
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write(content);
      response.end();
    }
  })
}
function upload(response) {
  console.log("Request handler 'upload' was called.")
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Hello Upload.");
  response.end();
}

exports.start = start;
exports.upload = upload;
