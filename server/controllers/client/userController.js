const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminKey=process.env.ADMIN_KEY;
const signup = async (req, res) => {
  try {
    const { name, email, password ,role,secretKey} = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    if (role==="admin")
    {
      if (secretKey!==adminKey)
      {
        return res.status(403).json({message:"Invalid admin secret key"})
      }
    }
    //hashing the pword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //pushing users in db
    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role,
    });
    
    res.status(201).json({
      message: "Successfully signed in",
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error:error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      { userID: user._id.toString(), role: user.role }, // Include role in token payload
      process.env.JWT_SECRET
    );
    res.status(200).json({
      message: "Login successful",
      token,
      role:user.role,
     
    });
  } catch (error) {
    res.status(500).json({
      message: "Erorr in login process",
      error:error.message,
    });
  }
};

const profile=async(req,res)=>
{
    try{
        const user=await User.findById(req.user)
        if(!user)
        {
            return res.status(401).json(
                {
                    message:"user not found"
                }
            )
        }
        res.status(201).json(user)
    }
    catch(error)
    {
        res.status(500).json(
            {
                message:"error in fetching",
                error:error.message
            }
        )
    }
}

const updateProfile= async(req,res)=>
{
    const {name,email}=req.body;
    try{
        const user=await User.findByIdAndUpdate(req.user,{name,email},{new:true});
    if(!user)
    {
        res.status(401).json(
            {
                message:"User not found"
            }
        )
    }

    res.status(201).json(user)
    }
    catch(error)
    {
        res.status(500).json(
            {
                mssage:"Updation failed",
                error:error.message
            }
        )
    }
}




module.exports = { signup, login ,profile,updateProfile};
