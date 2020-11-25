/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);

let result;
let isValidOperation = true;
if (operation === 'plus') {
  result = add.add(x, y);
} else if (operation === 'minus') {
  result = subtract.subtract(x, y);
} else if (operation === 'times') {
  result = multiply.multiply(x, y);
} else if (operation === 'over') {
  result = divide.divide(x, y);
} else {
  isValidOperation = false;
  console.log('Not a valid operation! Choose: plus, minus, times, over');
}

if (isValidOperation) {
  console.log(`result: ${result}`);
}
