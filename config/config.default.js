require('bytenode'); 
module.exports = require('./config.default.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')