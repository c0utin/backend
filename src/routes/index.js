// Import necessary modules and files
import express from 'express';
import ongs from '../routes/ongRoutes.js';  // Import the ongs routes

// Define a function for configuring routes
const routes = (app) => {
  // Define a route for the root URL that responds with a simple message
  app.route('/').get((req, res) => res.status(200).send('Index Route :)'));

  // Use middleware to enable JSON parsing and include the ongs routes
  app.use(express.json(), ongs);  // This line enables JSON parsing middleware and includes the routes defined in ongs file
};

// Export the configured routes function
export default routes;
