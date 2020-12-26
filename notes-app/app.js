const validator = require('validator');
const chalk = require('chalk');

const log = console.log;
const getNotes = require('./notes.js');

log(chalk.blue.green.inverse(getNotes()));

log(chalk.red(validator.isURL('https:/something.com')));
