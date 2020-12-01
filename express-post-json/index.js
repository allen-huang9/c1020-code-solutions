const express = require('express');

const grades = [];
let nextId = 1;

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades.push(req.body);
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
