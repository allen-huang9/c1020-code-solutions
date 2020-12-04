
const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'Postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();
const jsonMiddleWare = express.json();

app.use(jsonMiddleWare);

app.get('/api/grades', (req, res, next) => {

  const sql = 'select * from grades';

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const sql = `insert into "grades" ("name", "course", "score")
                  values ($1, $2, $3)`;

  const { name, course, grade } = req.body;

  if (name === undefined || course === undefined || grade === undefined) {
    res.status(400).send({
      error: 'The name, course and grade fields are required'
    });
    return;
  }

  const score = parseInt(grade);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).send({
      error: 'The grade must be a number from 0 to 100'
    });
    return;
  }

  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      res.status(201).send(req.body);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
