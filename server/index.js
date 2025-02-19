const express=require("express")
const dotenv=require("dotenv")
const cors =require("cors")
dotenv.config();

const connectDB=require("./config/db")

const adminuManageRoutes=require("./routes/admin/uManageRoutes")
const adminAuthRoutes = require("./routes/auth/adminRoutes");
const userRoutes = require("./routes/auth/userRoutes"); // For client authentication
const adminPortfolioRoutes = require("./routes/admin/portfolioRoutes");
const adminServiceRoutes = require("./routes/admin/serviceRoutes");
const adminBookingRoutes = require("./routes/admin/bookingRoutes");
const clientRoutes = require("./routes/client/clientRoutes");



connectDB()

const app=express()
app.use(cors())
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth/admin", adminAuthRoutes); // Admin authentication routes
app.use("/api/auth/user", userRoutes); // Client authentication routes
app.use("/api/admin/portfolio", adminPortfolioRoutes); // Admin portfolio management
app.use("/api/admin/service", adminServiceRoutes); // Admin service management
app.use("/api/admin/bookings", adminBookingRoutes); // Admin booking management
app.use("/api/client", clientRoutes); 
app.use("/api/admin/uManage",adminuManageRoutes)
const PORT=process.env.PORT || 5000;
app.listen(PORT,
    ()=>console.log(`server is running at ${PORT}`)
)