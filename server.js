const express = require('express');

const app = express();

const { notes } = require('./data/db');
console.log(notes);

const PORT = process.env.PORT || 3001;









// Chain the Listen Method onto the Server to make Server Listen
app.listen(PORT, () => { // Determine localhost Port 
  console.log(`API server now on port ${PORT}!`);
});