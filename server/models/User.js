//defining the userschema/structure for db
const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema= new Schema(
    {
        name:
        {
            type:String,
            required: true,
        },

        email:
        {
            type:String,
            required:true,
            unique: true,
        },

        password:
        {
            type:String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "client"], 
            default: "client",
          },


    }
);

//exported UserSchema
module.exports=mongoose.model("User",UserSchema)


