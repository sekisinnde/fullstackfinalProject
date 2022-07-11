import express from "express";
const router = express.Router();
import {createTest, getTests, getOneTest, updateTest, deleteTest} from '../controllers/test.js';

router.get('/', getTests);
router.get('/:id', getOneTest);
router.post('/', createTest);
router.patch('/:id', updateTest);
router.delete('/:id', deleteTest);

export default router;