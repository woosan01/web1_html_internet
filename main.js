// +---------------------------- MODULE -------------------------------+
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring')
// +---------------------------- MODULE -------------------------------+

// +----------------------------FUNCTION ------------------------------+
function templateHtml(title, list, body) {
  return `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              ${list}
            </ul>
              <a href="/create">create</a>
              ${body}
          </body>
          </html>
          `;

}

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i += 1;
  }
  list += '</ul>';
  return list;
}
// +------------------------------ BODY ------------------------------+
var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;
  if (pathName === '/') {
// +------------------------------{ HOME }------------------------------+
    if (queryData.id === undefined) {
      fs.readdir('web/web1_html_internet/data', function(err, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist);
        var template = templateHtml(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readdir('web/web1_html_internet/data', function(err, filelist) {
        fs.readFile(`web/web1_html_internet/data/${queryData.id}`, 'utf8',
        function(err, description) {
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHtml(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
// +------------------------------ { CREATE } ------------------------------+

  } else if(pathName === '/create'){
      if (queryData.id === undefined) {
        fs.readdir('web/web1_html_internet/data', function(err, filelist) {
          var title = 'Web  -  Create'
          var list = templateList(filelist);
          var template = templateHtml(title, list,`
            <form action="http://localhost:3000/create_process" method="post">
            <p>
              <input type="text" placeholder="Write title" name="title"/>
            </p>
            <p>
              <textarea placeholder="write description" name="description"></textarea>
            </p>
            <p>
              <input type="submit"/>
            </p>
            </form>
            `);
          response.writeHead(200);
          response.end(template);
        })
    }
// +------------------------ { CREATE_PROCESS } ------------------------+
  } else if (pathName === '/create_process'){
    var body = '';
    request.on('data', function (data){
      body += data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`web/web1_html_internet/data/${title}`, description, {encoding: "utf8"},
        function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
    });
  } else {
// +------------------------------{ HOME }------------------------------+
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
