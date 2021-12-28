// Include File System and Path
const fs = require('fs');
const path = require('path');

// createNewNote Function
function createNewNote(body, notesArray) {
  
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return finished code to post route for response
    return note;
};

// findById Function
function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
};

// Validate Note Function
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
};

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


module.exports = { createNewNote, findById, validateNote, filterByQuery };