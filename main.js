var http = require('http');
var fs = require('fs');
var url = require('url');

<<<<<<< HEAD
var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('web/web1_html_internet/data', function(err, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i += 1;
        }
        list += '</ul>';
        var template = `
=======
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
>>>>>>> 960404dbb5df5709796b26c52a57e0d23f4569f5
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
<<<<<<< HEAD
              ${list}
=======
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
>>>>>>> 960404dbb5df5709796b26c52a57e0d23f4569f5
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
<<<<<<< HEAD
        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readdir('web/web1_html_internet/data', function(err, filelist) {
        var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i += 1;
        }
        list += '</ul>';
        fs.readFile(`web/web1_html_internet/data/${queryData.id}`, 'utf8', function(err, description) {
=======
          response.writeHead(200);
          response.end(template);
        });
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
>>>>>>> 960404dbb5df5709796b26c52a57e0d23f4569f5
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
<<<<<<< HEAD
              ${list}
=======
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
>>>>>>> 960404dbb5df5709796b26c52a57e0d23f4569f5
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
<<<<<<< HEAD
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
=======
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
>>>>>>> 960404dbb5df5709796b26c52a57e0d23f4569f5
});
app.listen(3000);
