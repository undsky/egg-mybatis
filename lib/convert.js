require('bytenode'); 
module.exports = require('./convert.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')