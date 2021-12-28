// Include Router and noteRoutes
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

// Export
module.exports = router;