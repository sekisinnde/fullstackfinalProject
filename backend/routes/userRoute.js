import express from "express";
const router = express.Router();
import {createUser, getUsers, getOneUser, updateUser, deleteUser} from '../controllers/users.js';

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;