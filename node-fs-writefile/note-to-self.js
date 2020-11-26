
const fs = require('fs');

let note = '';
const processArgvLength = process.argv.length;
const processArgv = process.argv;

for (let i = 2; i < processArgvLength; i++) {
  if (i !== processArgvLength - 1) {
    note = note + processArgv[i] + ' ';
  } else {
    note = note + processArgv[i] + '\n';
  }
}

fs.writeFile('note.txt', note, err => {
  if (err) throw err;
});
