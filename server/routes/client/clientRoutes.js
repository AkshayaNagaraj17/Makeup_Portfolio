const express=require("express");
const router=express.Router();
const {createBooking,getBooking,getPortfolio,getService}=require("../../controllers/client/clientController")


router.post("/clientBook/create",createBooking)

router.get("/clientBook/get",getBooking)

router.get("/clientService/get",getService)

router.get("/clientPortfolio/get",getPortfolio)

module.exports=router