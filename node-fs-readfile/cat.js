/* eslint-disable no-console */

const fs = require('fs');

const arguementLength = process.argv.length;

for (let i = 2; i < arguementLength; i++) {
  setTimeout(() => {
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) throw err;

      console.log(data);
    }, 0);
  });
}
