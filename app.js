const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);

// console.log(pathObj);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

// console.log(`Total Memory on this device is: ${totalMemory} and the free memory is: ${freeMemory}`);

let files = fs.readdirSync('./');

console.log(files);