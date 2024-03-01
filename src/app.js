// Import necessary modules and files
import express from 'express';
import routes from './routes/index.js';  // Import the defined routes
import connectDatabase from './config/dbConnect.js';  // Import the database connection function

// Connect to the database
const connection = await connectDatabase();  // Establish a connection to the database

// Event handling for database connection errors
connection.on('error', (error) => {
  console.error('connection error :(', error);  // Log any errors that occur during the connection
});

// Event handling for successful database connection
connection.once('open', () => {
  console.log('connection database sucessfull');  // Log a message once the database connection is successfully established
});

// Create an Express application
const app = express();

// Set up routes for the application
routes(app);  // Pass the Express app to the routes setup function

// Export the configured Express app
export default app;
