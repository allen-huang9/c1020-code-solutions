const express = require('express');

const app = express();
app.use(function (req, res, next) {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
