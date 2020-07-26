const http = require('http')

http.createServer((request,response)=>{
    let body=[];
    request.on('error',(err)=>{
        console.error(err);
    }).on('data',(chunk)=>{
        body.push(chunk.toString());
    }).on('end',()=>{
        body=Buffer.contat(body).toString();
        console.log("body:",body);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<html><body>Hello World</body></html>\n');
    });

}).listen(8088);

console.log("server started");