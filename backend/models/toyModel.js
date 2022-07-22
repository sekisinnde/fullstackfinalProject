import mongoose from 'mongoose';

const toySchema = new mongoose.Schema({
  title: String,
  url: String
})

const Toy = mongoose.model('Toy', toySchema);

export default Toy;