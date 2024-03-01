// Import the mongoose library
import mongoose from 'mongoose';

// Asynchronous function to establish a connection to the MongoDB database
async function connectDatabase() {
  // Connect to the MongoDB database using the provided connection string
  mongoose.connect("mongodb+srv://inteli:inteli@cluster0.u0rqcru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  // Return the mongoose connection object
  return mongoose.connection;
}

// Export the connectDatabase function for use in other files
export default connectDatabase;
