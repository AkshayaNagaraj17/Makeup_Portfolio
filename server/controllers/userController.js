const User = require('../models/User');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const signup=async(req,res)=>
{
   try{
    const {name,email,password}=req.body;
    const userExists=await User.findOne({email})
    if(userExists)
    {
        return res.status(400)(
            {
                message:"User already exists"
            }
        )
    }
    //hashing the pword
    const salt=await bcrypt.genSalt(10)    
    const hashedPassword=await bcrypt.hash(password,salt)

    User.create(
        {
            name:name,
            email:email,
            password:hashedPassword
        }
    )
    res.status(201).json(
        {
            message:"Successfully signed in"
        }
    ) 
   }

   catch{
    res.status(500).json(
        { message: 'Error registering user', error });
   }
}