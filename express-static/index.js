
const express = require('express');

const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');

const expressMiddleWare = express.static(publicDirectoryPath);

const app = express();

app.use(expressMiddleWare);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
