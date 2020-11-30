
const fs = require('fs');

const randomNumber = Math.random() + '\n';

fs.writeFile('random.txt', randomNumber, err => {
  if (err) throw err;
});
