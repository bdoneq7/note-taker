// Include Path and Router
const path = require('path');
const router = require('express').Router();

// Send HTML Index File
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Send HTML Notes File
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Export
module.exports = router;