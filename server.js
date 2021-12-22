const express = require('express');

const app = express();

const { note } = require('./data/db');









app.get('/api/note', (req, res) => {
    res.send('Note Taker!');
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });