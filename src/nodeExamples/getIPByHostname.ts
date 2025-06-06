const dns = require('dns');

const hostnameLookup = (hostname: string) => {
  dns.lookup(hostname, (err: any, addresses: any, family: any) => {
    console.log(addresses);
  });
}

if (process.argv.length <= 2) {
  console.log("USAGE: " + __filename + " IPADDR")
  process.exit(-1)
}

const hostname = process.argv[2]
console.log(`Checking IP of: ${hostname}`)

hostnameLookup(hostname);