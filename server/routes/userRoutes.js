const express =require("express")
const router=express.Router();
const protect=require("../middleware/protect")
const{signup,login,profile,updateProfile}=require("../controllers/userController")

router.post("/user/signup",signup);


router.post("/user/login",login);


router.get("/user/profile",protect,profile)

router.put("/user/updateProfile",protect,updateProfile)


module.exports=router;