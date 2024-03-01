// Ong schema for mongoose
import mongoose from 'mongoose';

const ongSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  email: { type: String, required: [true, 'Email is required'] },
  telephone: { type: String },
  fundation: { type: Date },
  adress: { type: String },
  name: {type: String}
}, { versionKey: false });

const ong = mongoose.model('ongs', ongSchema);

export default ong;
