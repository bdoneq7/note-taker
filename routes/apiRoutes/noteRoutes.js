const router = require('express').Router(); // Router allows you to declare routes in any file as long as you use the proper middleware
const { notes } = require('../../data/db');

// Read db.json file and return all saved notes as JSON
router.get('/db', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
  });


  // Mulitple API Endpoint Route Function that Listens for Front End GET requests for specific animal ID
    router.get('/db/:id', (req, res) => { 
    const result = findById(req.params.id, notes); // Single Parameter
    if (result) {
        res.json(result); // send result to client in json format
    } else {
        res.sendStatus(404);
    }
});

router.post('/db', (req, res) => { 
    // set id based on what the next index of the array will be - id's must be unique
    req.body.id = db.length.toString();

    // if any data in req.body is incorrect, send 400 error back to client
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.'); // 400 is a user error
    } else {
        // add note to json file and animals array in this function
        const note = createNewNote(req.body, db);

        // req.body is where our incoming content will be
        res.json(notes); // send data back to client
    }
});

module.exports = router;