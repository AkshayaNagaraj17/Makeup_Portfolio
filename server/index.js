const express=require("express")
const dotenv=require("dotenv")
dotenv.config();
const userRoutes=require("./routes/userRoutes")
const connectDB=require("./config/db")

connectDB()

const app=express()
app.use(express.json());
app.use("/api",userRoutes)



const PORT=process.env.PORT || 5000;
app.listen(PORT,
    ()=>console.log(`server is running at${PORT}`)
)