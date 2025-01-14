const mongoose=require("mongoose")
const Schema=mongoose.Schema


const ServiceSchema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }
)

module.exports=mongoose.model("Services",ServiceSchema)