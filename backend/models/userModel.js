import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type:String, required:true},
  firstName: { type:String, required:true},
  lastName: String,
  age: String,
  password: String,
  adress: String,
  phoneNumber: String
})

const User = mongoose.model('User', userSchema);

export default User;