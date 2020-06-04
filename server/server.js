const express = require('express');
const path = require('path');

const app = express();

app.use('/resources', express.static('resources'));
app.use('/src', express.static('src'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(8080);
