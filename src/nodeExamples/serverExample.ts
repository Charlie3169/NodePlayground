const http1 = require("http");
const fs1 = require("fs");
const os1 = require("os");
const ip1 = require('ip');

http.createServer((req : any, res : any) => {
  if (req.url === "/") {
      fs1.readFile("./public/index.html", "UTF-8", (err : any, body : any) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(body);
    });
  } else if(req.url.match("/sysinfo")) {
    let myHostName= os1.hostname();
    let html=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node JS Response</title>
      </head>
      <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip1.address()}</p>
        <p>Server Uptime: </p>
        <p>Total Memory: </p>
        <p>Free Memory: </p>
        <p>Number of CPUs: </p>
      </body>
    </html>`
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end(`404 File Not Found at ${req.url}`);
  }
}).listen(3000);

console.log("Server listening on port 3000");