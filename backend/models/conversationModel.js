import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    title: String,
    category: String,
    message: {
        author: Array,
        contenu: Array,
        date: Array
    }
})

const Conversation = mongoose.model('conversation', conversationSchema);

export default Conversation;