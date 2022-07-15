import express from "express";
const router = express.Router();
import {createCategory, getCategories, getOneCategory, updateCategory, deleteCategory} from '../controllers/categories.js';

router.get('/', getCategories);
router.get('/:id', getOneCategory);
router.post('/', createCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;