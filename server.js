const { notes } = require('./data/notes');

// Include Express
const express = require('express');

// Instantiate the Server
const app = express();

// Get PORT
const PORT = process.env.PORT || 3001;


// filterByQuery Function
function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }
  if (query.text) {
    filteredResults = filteredResults.filter(note => note.text === query.text);
  }
  return filteredResults;
};

// findById Function
function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
};


// Get Api Route
app.get('/api/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// Get api Route by ID
app.get('/api/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
    
});





// Chain the Listen Method onto the Server to make Server Listen
app.listen(PORT, () => { // Determine localhost Port 
  console.log(`API server now on port ${PORT}!`);
});