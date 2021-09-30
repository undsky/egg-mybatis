require('bytenode'); 
module.exports = require('./index.'+process.platform+'.'+process.version+'.jsc')