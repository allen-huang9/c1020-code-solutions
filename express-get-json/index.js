const array = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Metal Mario',
    course: 'Meming',
    grade: 9000
  }
];

const express = require('express');

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(array);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
