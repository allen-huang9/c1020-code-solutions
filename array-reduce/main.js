/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((totalSum, currentValue) => {
  return totalSum + currentValue;
});

console.log('sum: ', sum);

const products = numbers.reduce((total, currentValue) => {
  return total * currentValue;
});

console.log('product: ', products);

const balance = account.reduce((balanceTotal, transaction) => {

  const amount = transaction.amount;

  if (transaction.type === 'deposit') {
    balanceTotal += amount;
  } else {
    balanceTotal -= amount;
  }
  return balanceTotal;
}, 0);

console.log('balance: ', balance);

const composite = traits.reduce((finalObject, traits) => Object.assign(finalObject, traits));

console.log('composite traits: ', composite);
