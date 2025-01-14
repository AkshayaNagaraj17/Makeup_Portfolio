const mongoose=require("mongoose");
const Schema =mongoose.Schema;


const PortfolioSchema=new Schema(
    {
        title:{type:String,
            required:true
        },
        descricption:{type:String,
            required:true
        },
        image:{
            type:String, //url
            required:true
        }
    }
)

module.exports=mongoose.model("Portfolio",PortfolioSchema)