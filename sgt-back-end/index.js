
const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'Postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();
const jsonMiddleWare = express.json();

app.use(jsonMiddleWare);

app.get('/api/grades', (req, res) => {

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

app.post('/api/grades', (req, res) => {
  const sql = `insert into "grades" ("name", "course", "score")
                  values ($1, $2, $3)
                  returning *`;

  const { name, course, grade } = req.body;

  if (name === undefined || course === undefined || grade === undefined) {
    res.status(400).send({
      error: 'The name, course and grade fields are required'
    });
    return;
  }

  // const score = parseInt(grade);
  if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
    res.status(400).send({
      error: 'The grade must be a number from 0 to 100'
    });
    return;
  }

  const params = [name, course, grade];
  db.query(sql, params)
    .then(result => {
      res.status(201).send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {

  const sql = `update "grades"
                set "name" = $1, "course" = $2, "score" = $3
                where "gradeId" = $4
                returning *`;

  const idSql = 'select "gradeId" from "grades"';

  const { name, course, grade } = req.body;
  const gradeId = parseInt(req.params.gradeId);

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

  let idIsValid = false;

  db.query(idSql)
    .then(result => {
      for (let i = 0; i < result.rows.length; i++) {
        if (result.rows[i].gradeId === gradeId) {
          idIsValid = true;
          break;
        }
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      if (idIsValid) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {

  const sql = 'delete from "grades" where "gradeId" = $1';

  const idSql = 'select "gradeId" from "grades"';

  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'The gradeId must be a valid number'
    });
    return;
  }

  let idIsValid = false;

  db.query(idSql)
    .then(result => {
      for (let i = 0; i < result.rows.length; i++) {
        if (result.rows[i].gradeId === gradeId) {
          idIsValid = true;
          break;
        }
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (idIsValid) {
        res.sendStatus(204);
      } else {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      }
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
