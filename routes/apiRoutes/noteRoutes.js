// Include Router, Notes
const router = require('express').Router(); // Router allows you to declare routes in any file as long as you use the proper middleware
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../data/notes');

// Add Single API Endpoint Route that Listens for Front End GET requests for notes
router.get('/notes', (req, res) => { // req (request)
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results); // json method from res (response) parameter to send note json api to our client
});

// Mulitple API Endpoint Route Function that Listens for Front End GET requests for specific note ID
router.get('/notes/:id', (req, res) => { 
    const result = findById(req.params.id, notes); // Single Parameter
    if (result) {
        res.json(result); // send result to client in json format
    } else {
        res.sendStatus(404);
    }
});

// API Endpoint Route that Listens for POST Requests from Client
router.post('/notes', (req, res) => { 
    // set id based on what the next index of the array will be - id's must be unique
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back to client
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.'); // 400 is a user error
    } else {
        // add animal to json file and animals array in this function
        const note = createNewNote(req.body, notes);

        // req.body is where our incoming content will be
        res.json(note); // send data back to client
    }
});

module.exports = router;