/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
});

module.exports = app;