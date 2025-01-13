const express =require("express")
const router=require("Router")
const{usersignup}=require("../controllers/userController")

router.post("/signup",usersignup);





module.exports=router;