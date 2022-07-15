import mongoose from 'mongoose';

const toySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  url: String,
  quantity: Number
})

const Toy = mongoose.model('toy', toySchema);

export default Toy;