const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Ensure token contains `user` object or `id`
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};





// Middleware to check if user is an admin
// const isAdmin = (req, res, next) => {
//     if (req.user && req.user.role === "admin") {
//         next();
//     } else {
//         res.status(403).json({ message: "Access denied. Admins only." });
//     }
// };

module.exports = {protect};
