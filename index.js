const chalk = require('chalk')
const moment = require('moment')

const line1 = chalk.blue(moment().format('LLLL'))
const line2 = chalk.magenta(moment().format('DDD'))
const line3 = chalk.cyan(moment().diff(moment().startOf('day')), 'seconds')
const line4 = moment().isDST()
const line5 = moment().isLeapYear()

console.log(`It is ${line1}`);
console.log(`It is the ${line2}th day of the year.`);
console.log(`It is ${line3} seconds into the day.`);

if(line4 === true) {
  console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.');
}else {
  console.log('It ' + chalk.green('is not') + ' during Daylight Savings Time.');
}

if(line5 === true) {
  console.log('It ' + chalk.red('is') + ' a Leap Year.');
}else {
  console.log('It ' + chalk.red('is not') + ' a Leap Year.');
}
