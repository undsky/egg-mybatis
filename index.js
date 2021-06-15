require('bytenode'); 
module.exports = require('./index.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')