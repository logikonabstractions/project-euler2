/*PROJECT EULER
* franckyvee, sonjewer
* */

/*ok seems imports are just a crazy mess in JS. for some reason one doesn't simply *import* shits.
*
*
*
* */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* an exemple of using require(), which can be used
* to "import" functinalities from node/npm packages etc.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
const fs = require('fs')          //file system

fs.readFile('./demo.txt', 'utf-8', (err, data) => {
    if(err) { throw err; }
    console.log('data: ', data);
});

/*
* using exports.something  syntaxe*/
// import it. assumes it was exported in the source as exports.exported_name = some_js_object
const exported = require('./problems/export_demo.js');
console.log(exported.its_me);

/* using newer syntaxe
*
* */
import { some_export_1, my_func } from './problems/export_demo';