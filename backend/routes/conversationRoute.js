import express from "express";
const router = express.Router();
<<<<<<< HEAD
import {createMessage, createConversation, getConversations, getOneConversation, updateConversation, deleteConversation} from '../controllers/conversations.js';

=======
import {getCategory, createMessage, createConversation, getConversations, getOneConversation, updateConversation, deleteConversation} from '../controllers/conversations.js';


router.get('/category/:id', getCategory)
>>>>>>> oumar
router.get('/', getConversations);
router.get('/:id', getOneConversation);
router.post('/', createConversation);
router.post('/:id/create', createMessage);
router.put('/:id', updateConversation);
router.delete('/:id', deleteConversation);

export default router;