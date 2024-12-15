const http0 = require('http');
const fs0 = require('fs');
const { promisify } = require('util');

const server = http0.createServer(async (req : any, res : any) => {
  //res.writeHead(200, {"Content-Type": "text/html"});
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html")

  const file = await promisify(fs0.readFile)('$/public/Index.html')

  res.end(file)

}).listen(3000)

console.log("Server listening on port 3000")