var fs = require('fs');
var path = require('path');


var func = () => {
    console.log(fs.readFileSync(path.join(__dirname, 'test.js'), 'utf8'));
}

module.exports = func;
