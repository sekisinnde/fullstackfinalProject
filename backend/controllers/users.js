import User from "../models/userModel.js";

export const getUsers =  async (req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).json(listUsers);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const verifyUser = async (req, res) => {
    try {
        const myUser = await User.findOne({email: req.params.email})
        res.json({hi})
        if(myUser.email == req.body.email & myUser.password == req.body.password){
            res.json({exists: true})
        }
            else{res.json({message: "Wrong email or password"})}
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            adress: req.body.adress
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser =  await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id: req.params.id})
        res.status(200).json(deletedUser)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}