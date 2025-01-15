const express = require("express");
const router = express.Router();
const { createPortfolio, updatePortfolio, getPortfolio } = require("../../controllers/admin/admin/portfolioController");

// Admin routes for portfolio management
router.post("/createpf", createPortfolio); 
router.put("/updatepf/:id", updatePortfolio); 
router.get("/getpf", getPortfolio); 

module.exports = router;
