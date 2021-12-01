require('bytenode'); 
module.exports = require('./helper.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')