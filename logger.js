
const url = 'http://mylogger.io/logger';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports.log = log;