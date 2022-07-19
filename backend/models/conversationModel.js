import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
<<<<<<< HEAD
    title: String,
    category: String,
=======
    info: {
        title: String,
        category: String
    },
>>>>>>> oumar
    message: {
        author: Array,
        contenu: Array,
        date: Array
    }
})

const Conversation = mongoose.model('conversation', conversationSchema);

export default Conversation;