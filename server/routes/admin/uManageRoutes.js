const express = require("express");
const router = express.Router();
const{getAllUsers,deleteUser}=require("../../controllers/admin/admin/userController")

router.get("/getUser",getAllUsers)

router.delete("/deleteUser/:id",deleteUser)

module.exports=router