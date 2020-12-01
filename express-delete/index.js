const array = [
  {
    id: 1,
    name: 'Jace',
    course: 'Counter Spells',
    grade: 'A+'
  },
  {
    id: 2,
    name: 'Chandra',
    course: 'Pyromancy',
    grade: 'A+'
  }
];

const express = require('express');

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(array);
});

app.delete('/api/grades/:id', (req, res) => {
  res.sendStatus(204);

  const id = parseInt(req.params.id);
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      array.splice(i, 1);
    }
  }
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
