import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  firstName: {type: String, required: false},
  lastName: {type: String, required: false},
  password: {type: String, required: true},
  adress: {type: String, required: false}
})

const User = mongoose.model('User', userSchema);

export default User;