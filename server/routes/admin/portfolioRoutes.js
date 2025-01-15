const express = require("express");
const router = express.Router();
const { addPortfolioItem ,updatePortfolioItem,deletePortfolioItem} = require("../../controllers/admin/admin/portfolioController");

// Admin routes for portfolio management
router.post("/createpf",addPortfolioItem ); 
router.put("/updatepf/:id", updatePortfolioItem); 
router.get("/getpf", deletePortfolioItem); 

module.exports = router;
