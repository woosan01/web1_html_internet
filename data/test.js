var fs = require('fs');


fs.appendFile('web/web1_html_internet/data/hello.txt', 'Hello content!', function (err) {
  console.log('Saved!');
});

// fs.appendFile('data/hello.txt','hello!' function(err){
//   if(err) throw err;
//   console.log('success');
// });
//
 fs.readFile('web/web1_html_internet/data/hello.txt','utf-8', function(err, data){
   console.log(data);
 });
