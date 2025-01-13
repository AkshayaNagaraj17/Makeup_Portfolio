const express=require("express")
const dotenv=require("dotenv")
const userRoutes=require("./routes/userRoutes")
const connectDB=require("./config/db")
dotenv.config();
connectDB()
const app=express()

app.use("/api/user",userRoutes)



const PORT=process.env.PORT;
app.listen(PORT,
    ()=>console.log(`server is running at${PORT}`)
)