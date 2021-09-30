require('bytenode'); 
module.exports = require('./application.prod.'+process.platform+'.'+process.version+'.jsc')