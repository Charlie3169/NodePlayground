const http9 = require("http");
const data9 = require("./widgets.json");

const server9 = http9.createServer((req : any, res : any) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data9));        
      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Data not found");        
      }    
});

server.listen(3000);
console.log("Server listening on port 3000");