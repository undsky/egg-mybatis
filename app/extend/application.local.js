require('bytenode'); 
module.exports = require('./application.local.'+process.platform+'.'+process.version+'.jsc')