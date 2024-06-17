const express = require("express");
const bcryptjs = require('bcryptjs');
const User = require("../models/user.js");
const authRouter=express.Router();


//SIGN UP
authRouter.post('/api/signup',async (req,res)=>{
    try {
        //get the data from client
    const {name,email,password} = req.body;

    const existingUser = await User.findOne({email:email});
    if(existingUser){
        return res
        .status(400)
        .json({msg:"User with same eamil already exists!"});
    }

    //bcrypt password
    const hashedPassword=await bcryptjs.hash(password,8);


    //post the data in database
    let user = new User(
        {
            email,
            password:hashedPassword,
            name,
        }
    )

    user = await user.save();
    //return the data to user
    res.json(user);
        
    } catch (error) {
        res.status(500).json({error:error.message});
        
    }
    
})

module.exports = authRouter;