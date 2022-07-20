import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  age: String,
  password: String,
  adress: String,
  phoneNumber: String
})

const User = mongoose.model('user', userSchema);

export default User;