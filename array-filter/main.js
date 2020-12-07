/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log('evenNumber: ', evenNumbers);

const overFive = numbers.filter(number => number > 5);

console.log('overFive: ', overFive);

const startWithE = names.filter(name => name[0] === 'E');

console.log('startWithE: ', startWithE);

const haveD = names.filter(name => name.toLowerCase().split('').includes('d'));

console.log('haveD: ', haveD);
