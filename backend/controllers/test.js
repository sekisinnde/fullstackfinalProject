import Test from "../models/testModel.js";

export const getTests =  async (req, res) => {
    try {
        const listTests = await Test.find()
        res.status(200).json(listTests);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneTest = async (req, res) => {
    try {
        const myTest = await Test.findById({_id: req.params.id})
        res.status(200).json(myTest);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createTest = async (req, res) => {
    try {
        const newTest = await Test.create({ name: req.body.name, description: req.body.description, price: req.body.price, capacity: req.body.capacity, image:req.body.image, ageLimit: req.body.ageLimit })
        res.status(200).json(newTest)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateTest = async (req, res) => {
    try {
        const updatedTest =  await Test.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedTest)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteTest = async (req, res) => {
    try {
        const deletedTest = await Test.deleteOne({_id: req.params.id})
        res.status(200).json(deletedTest)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}