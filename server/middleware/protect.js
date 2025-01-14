const jwt=require("jsonwebtoken");

const protect=(req,res,next)=>
{
    const token=req.header("token");
    if(!token)
    {
        return res.status(400).json(
            {
                message:"No token auth denied"
            }
        )
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded.userID
        next();
    }
    catch(error)
    {
        res.status(500).json(
        {
           message:"token invalid"
        })
    }
}

module.exports=protect