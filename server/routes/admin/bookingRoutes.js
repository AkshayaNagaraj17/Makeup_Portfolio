const express=require("express")
const router=express.Router()
const {getBooking}=require("../../controllers/admin/admin/bookingController")


// router.get("/",createBooking);

router.delete("/getbooking",getBooking)


module.exports=router