require('bytenode'); 
module.exports = require('./application.local.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')