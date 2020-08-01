/* ok, this post does a decent job of explaining the sillyness:
* https://appdividend.com/2019/01/23/javascript-import-statement-tutorial-with-example/
* */


require('babel-register')({
    presets: ['env']
});

module.exports = require('./export_demo/app.js')
