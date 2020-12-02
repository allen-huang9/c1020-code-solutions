
const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const app = express();
const jsonMiddleware = express.json();

const noteArray = [];
const dataNotes = data.notes;

if (Object.keys(dataNotes).length !== 0) {

  for (const id in dataNotes) {
    noteArray.push(dataNotes[id]);
  }
}

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {

  res.status(200).json(noteArray);
});

app.get('/api/notes/:id', (req, res) => {

  const stringId = req.params.id;
  const id = parseInt(stringId);

  if (isValidId(res, id, stringId)) {
    res.status(200).json(dataNotes[stringId]);
  }
});

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).includes('content')) {
    req.body.id = data.nextId;

    dataNotes[data.nextId++] = req.body;

    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonString, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        process.exit(1);
      } else {
        res.status(201).json(req.body);
      }
    });

  } else {

    res.status(400).json({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const stringId = req.params.id;
  const id = parseInt(stringId);

  if (isValidId(res, id, stringId)) {
    delete dataNotes[stringId];

    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonString, err => {
      if (err) {

        res.status(500).json({ error: 'An unexpected error occurred.' });
        process.exit(1);
      } else {
        res.sendStatus(204);
      }
    });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const stringId = req.params.id;
  const id = parseInt(stringId);
  if (id < 0 || isNaN(id)) {

    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!Object.keys(req.body).includes('content')) {

    res.status(400).json({ error: 'content is a required field' });
  } else if (!Object.keys(dataNotes).includes(stringId) && Object.keys(req.body).includes('content')) {

    res.status(404).json({ error: 'cannot find note with id ' + stringId });
  } else {

    dataNotes[stringId].content = req.body.content;
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonString, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured' });
        process.exit(1);
      } else {
        res.status(200).json(dataNotes[stringId]);
      }
    });
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

function isValidId(res, id, stringId) {
  let valid = true;
  if (id < 0 || isNaN(id)) {

    res.status(400).json({ error: 'id must be a positive integer' });
    valid = false;
  } else if (!Object.keys(dataNotes).includes(stringId)) {

    res.status(404).json({ error: 'cannot find note with id ' + stringId });
    valid = false;
  }
  return valid;
}
