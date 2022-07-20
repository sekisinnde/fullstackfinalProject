import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String
})

const Category = mongoose.model('user', categorySchema);

export default Category;