/* eslint-disable no-console */

let userInput = '';
const processArrayLength = process.argv.length;

for (let i = 2; i < processArrayLength; i++) {
  if (i !== processArrayLength - 1) {
    userInput = userInput + process.argv[i] + ' ';
  } else {
    userInput += process.argv[i];
  }

}

console.log(userInput);
