import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  contenu: {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    message: String,
    date: {
      type: Date,
      default: Date.now
    }
  }
})

const Message = mongoose.model('message', messageSchema);

export default Message;