import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  age: Date(),
  password: String,
  adressNumber: Number,
  adress: String,
  phoneNumber: Number
})

const User = mongoose.model('user', userSchema);

export default User;