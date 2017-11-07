var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
    var fs = require('fs');

http.createServer(function(request, response) {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  var content = fs.readFileSync('./post_file.html')
  res.writeHead(200, {'content-type': 'text/html'});
  // res.end(
  //   '<form action="/upload" enctype="multipart/form-data" method="post">'+
  //   '<input type="text" name="title"><br>'+
  //   '<input type="file" name="upload" multiple="multiple"><br>'+
  //   '<input type="submit" value="Upload">'+
  //   '</form>'
  // );
  res.end(content);
}).listen(8080, function(){
  console.log('File ferver is starting on port 8080')
});
