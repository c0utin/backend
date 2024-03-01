// Import the Ong model
import ongModel from '../models/Ong.js';

// Define a controller for handling Ong-related operations
class OngController {
  // Method for listing all ONGs
  static async listOngs(req, res) {
    try {
      // Retrieve and log the list of ONGs from the database
      const listOngs = await ongModel.find({});
      console.log('List of ONGs:', listOngs);

      // Respond with the list of ONGs in JSON format
      res.status(200).json(listOngs);
    } catch (error) {
      // Log an error message and respond with a 500 Internal Server Error if an error occurs
      console.error('Error listing ONGs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Method for adding a new ONG
  static async addOng(req, res) {
    try {
      // Extract relevant fields from the request body
      const { cnpj, fundation, adress, email, telephone, name } = req.body;

      // Validate that all required fields are present
      if (!cnpj || !fundation || !adress || !email || !telephone || !name) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create a new Ong instance with the provided data
      const novaOng = new ongModel({
        cnpj,
        fundation,
        adress,
        email,
        telephone,
        name,
      });

      // Save the new Ong to the database
      await novaOng.save();

      // Respond with a success message
      res.status(201).json({ message: 'ONG added successfully' });
    } catch (error) {
      // Respond with a 500 Internal Server Error if an error occurs during the addition process
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

// Export the OngController for use in other files
export default OngController;
