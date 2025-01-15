const express =require("express")
const router=express.Router();
const protect=require("../../middleware/protect")
const{signup,login,profile,updateProfile}=require("../../controllers/client/authController")

router.post("/signup",signup);


router.post("/login",login);


router.get("/profile",protect,profile)

router.put("/updateProfile",protect,updateProfile)


module.exports=router;