const express=require("express")
const dotenv=require("dotenv")
dotenv.config();

const connectDB=require("./config/db")


const adminAuthRoutes = require("./routes/auth/adminAuthRoutes");
const userRoutes = require("./routes/auth/userRoutes"); // For client authentication
const adminPortfolioRoutes = require("./routes/admin/portfolioRoutes");
const adminServiceRoutes = require("./routes/admin/serviceRoutes");
const adminBookingRoutes = require("./routes/admin/bookingRoutes");
const clientRoutes = require("./routes/client/clientRoutes");



connectDB()

const app=express()
app.use(express.json());
app.use("/api/auth/admin", adminAuthRoutes); // Admin authentication routes
app.use("/api/auth/user", userRoutes); // Client authentication routes
app.use("/api/admin/portfolio", adminPortfolioRoutes); // Admin portfolio management
app.use("/api/admin/service", adminServiceRoutes); // Admin service management
app.use("/api/admin/bookings", adminBookingRoutes); // Admin booking management
app.use("/api/client", clientRoutes); 

const PORT=process.env.PORT || 5000;
app.listen(PORT,
    ()=>console.log(`server is running at${PORT}`)
)