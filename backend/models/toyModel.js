import mongoose from 'mongoose';

const toySchema = new mongoose.Schema({
  title: String,
  author: String,
  img: String,
  price: String
})

const Toy = mongoose.model('Toy', toySchema);

export default Toy;