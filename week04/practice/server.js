const http = require('http'); 

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    console.log("chunk:" + chunk.toString());
    body.push(chunk.toString());
  }).on('end', () => { 
    body = Buffer.concat(body).toString();
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end('<html><body>Hello World</body></html>\n');
  });

}).listen(8088);

console.log("server started");