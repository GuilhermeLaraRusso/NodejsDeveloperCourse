/**
 * Challange: Use the chalk library in your project
 * 1. Install version 2.4.1 of chalk
 * 2. Load chalk into app.js
 * 3. Use it to print string "Success" to the console in gree
 * 4. Test your work
 * 
 * Bonus: Use docs to mess around with other styles. Make text bold and inversed.
 */

const chalk = require('chalk');

console.log(chalk.green.bgRed('Success'));

console.log(chalk.green(
  'I am a green line ' + 
  chalk.blue.underline.bold('with a blue substring') + 
  ' that becomes green again!'
))

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(error('Error!'));
console.log(warning('Warning!'));