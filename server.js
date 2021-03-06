const express = require('express');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// access front-end code in public folder
app.use(express.static('public'));

// if client navigates to <ourhost>/api, the app will use the
// router we set up in apiRoutes. If / is the endpoint, then
// the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});