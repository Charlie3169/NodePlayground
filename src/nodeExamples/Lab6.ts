const http6 = require("http");
const os6 = require("os");
const ip6 = require('ip');

http6.createServer((req : any, res : any) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    let myHostName=os6.hostname();
    let serverUptime = os6.uptime();
    let reducedDays = Math.floor(serverUptime / 86400);
    let reducedHours = Math.floor(serverUptime / 3600) - reducedDays * 24;
    let reducedMinutes = Math.floor(serverUptime / 60) - reducedDays * 1440 - reducedHours * 60;
    let reducedSeconds = serverUptime - reducedDays * 86400 - reducedHours * 3600 - reducedMinutes * 60;
    let totalMemory = (os6.totalmem() / (1024**2)).toFixed(3);
    let freeMemory = (os6.freemem() / (1024**2)).toFixed(3);
    let numCPUs = os6.cpus().length;
      
    let html=`    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node JS Response</title>
      </head>
      <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip6.address()}</p>
        <p>Server Uptime: Days: ${reducedDays}, Hours: ${reducedHours}, Minutes: ${reducedMinutes}, Seconds: ${reducedSeconds}</p>
        <p>Total Memory: ${totalMemory} MB</p>
        <p>Free Memory: ${freeMemory} MB</p>
        <p>Number of CPUs: ${numCPUs}</p>
      </body>
    </html>`
    
    res.end(html);  
}).listen(3000);

console.log("Server listening on port 3000");