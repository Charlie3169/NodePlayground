const http10 = require("http");
const data10 = require("./widgets.json");
const os10 = require("os");
const ip10 = require('ip');

const config = require('config')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request : any, response : any) {
    response.send
    (
        '<b>Hello World! My name is:<em>' + process.env.MYNAME + '</em> <br /> My Node Environment is:<em>' 
        + config.util.getEnv('NODE_ENV') + '</em></b>'
        + '<br/><br/>' +'<b><a href="/sysinfo">Get system info!</a></b>'
    )
})

app.get('/env', (request : any, response : any) => {
    if (config.util.getEnv("NODE_ENV") === "Testing") {
      response.send('<b>You are working in the <em>TEST</em> environment.</b>')
    } else if (config.util.getEnv("NODE_ENV") === "Heroku Test") {
      response.send('<b>You are working in the <em>TEST</em> environment that is in Heroku.</b>')
    } else if (config.util.getEnv("NODE_ENV") === "Production") {
      response.send('<b>You are working in Production</b>')
    } else {
      response.send('<b>Environment is unknown</b>')
    }
  })

app.get('/api', (request : any, response : any) => {
    response.send(JSON.stringify(request))    
})

app.get('/sysinfo', (request : any, response : any) => {   

    let myHostName=os10.hostname();
    let serverUptime = os10.uptime();
    let reducedDays = Math.floor(serverUptime / 86400);
    let reducedHours = Math.floor(serverUptime / 3600) - reducedDays * 24;
    let reducedMinutes = Math.floor(serverUptime / 60) - reducedDays * 1440 - reducedHours * 60;
    let reducedSeconds = serverUptime - reducedDays * 86400 - reducedHours * 3600 - reducedMinutes * 60;
    let totalMemory = (os10.totalmem() / (1024**2)).toFixed(3);
    let freeMemory = (os10.freemem() / (1024**2)).toFixed(3);
    let numCPUs = os10.cpus().length;
      
    let html=`    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node JS Response</title>
      </head>
      <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip10.address()}</p>
        <p>Server Uptime: Days: ${reducedDays}, Hours: ${reducedHours}, Minutes: ${reducedMinutes}, Seconds: ${reducedSeconds}</p>
        <p>Total Memory: ${totalMemory} MB</p>
        <p>Free Memory: ${freeMemory} MB</p>
        <p>Number of CPUs: ${numCPUs}</p>
      </body>
    </html>`
    
    response.send(html);      
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

