const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgBlue.black(greet('Xola'));
console.log(styledMessage)

// using figlet
const figlet = require('figlet');

figlet('Xola', function(errorMsg, data) {
    if (errorMsg) {
        console.log('Something went wrong...');
        console.dir(errorMsg);
        return;
    }
    console.log(data)
});