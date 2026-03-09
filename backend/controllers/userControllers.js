import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js'

export const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        return res.status(400).json({message: "user alrady exist "})
    }

    const user =  await User.create({
        name,
        email,
        password,
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else{
        return res.status(400)
        .json("invalid user data")
    }
})


export const authUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else {
        return res.status(401).json({missage: 'Invalid email or password'})
    }
})