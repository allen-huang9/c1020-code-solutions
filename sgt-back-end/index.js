
const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'Postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

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

app.listen(3000, () => {
  console.log('listening to port 3000');
});
