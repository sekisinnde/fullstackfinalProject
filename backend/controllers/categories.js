import Category from "../models/userModel.js";

export const getCategories =  async (req, res) => {
    try {
        const listCategories = await Category.find()
        res.status(200).json(listCategories);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneCategory = async (req, res) => {
    try {
        const myCategory = await Category.findById({_id: req.params.id})
        res.status(200).json(myCategory);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create({
            gen: req.body.gen
        })
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory =  await Category.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.deleteOne({_id: req.params.id})
        res.status(200).json(deletedUser)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}