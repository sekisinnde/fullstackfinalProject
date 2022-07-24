import express from "express";
const router = express.Router();
import {createUser, verifyUser} from '../controllers/users.js';

router.post('/', createUser);
router.post('/verify', verifyUser);

export default router;