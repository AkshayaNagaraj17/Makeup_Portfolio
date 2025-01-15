const express=require("express")
const router=express.Router()
const {viewBooking,deleteBooking}=require("../../controllers/admin/admin/bookingController")


router.get("/getbooking",viewBooking);

router.delete("/deletebooking",deleteBooking)


module.exports=router