import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: String
})

const Test = mongoose.model('test', testSchema);

export default Test;