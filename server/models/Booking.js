const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const BookingSchema=new Schema({
    clientName:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    phone:{
        type:Number,required:true
    },
    date:{
        type:Date,required:true
    },
    venue:{
        type:String,required:true
    },
    service:{
        type:String,required:true
    }

})

module.exports=mongoose.model("Bookings",BookingSchema)
