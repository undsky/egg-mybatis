require('bytenode'); 
module.exports = require('./application.prod.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')