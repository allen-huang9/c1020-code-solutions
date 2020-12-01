/* eslint-disable no-console */

const fs = require('fs');
const dataJson = require('./data.json');

const operation = process.argv[2];
const choice = process.argv[3];

const jsonNotes = dataJson.notes;
const notesIndex = Object.keys(jsonNotes);

if (operation === 'read') {
  // fs.readFile('data.json', 'utf8', (err, data) => {

  // if (err) throw err;

  for (let i = 0; i < notesIndex.length; i++) {
    console.log(notesIndex[i] + ': ' + jsonNotes[notesIndex[i]]);
  }
  // });
} else if (operation === 'delete') {

  if (notesIndex.includes(choice)) {

    delete jsonNotes[choice];

    const jsonString = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', jsonString, err => {
      if (err) throw err;
    });
  } else {
    console.log('Invalid choice');
  }
} else if (operation === 'update') {

  if (notesIndex.includes(choice)) {

    const processArray = process.argv;
    const editedNote = processArray.slice(4);

    const updatedNote = reCreateNote(editedNote);
    jsonNotes[choice] = updatedNote;

    const jsonString = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', jsonString, err => {
      if (err) throw err;
    });
  } else {
    console.log('Invalid choice');
  }
} else if (operation === 'create') {
  const processArray = process.argv;
  const newNote = processArray.splice(0, 3);

  jsonNotes[dataJson.nextId] = reCreateNote(newNote);
  dataJson.nextId++;

  const jsonString = JSON.stringify(dataJson, null, 2);

  fs.writeFile('data.json', jsonString, err => {
    if (err) throw err;
  });
} else {
  console.log('invalid operation');
}

function reCreateNote(array) {
  let insertNote = '';

  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      insertNote = insertNote + array[i] + ' ';
    } else {
      insertNote = insertNote + array[i];
    }
  }
  return insertNote;
}
