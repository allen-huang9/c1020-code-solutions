/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const luckPromise = takeAChance('Allen');

luckPromise.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
