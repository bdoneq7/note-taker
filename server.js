// Include Express
const express = require('express');

// Instantiate the Server
const app = express();

// The require() statements will read the index.js files in each of the directories indicated
// This mechanism works the same way as directory navigation does in a website
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Get PORT 3001 If Available
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Use public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
// Use htmlRoutes
app.use('/', htmlRoutes);

// Chain the Listen Method onto the Server to make Server Listen
app.listen(PORT, () => { // Determine localhost Port 
  console.log(`API server now on port ${PORT}!`);
});