const express = require("express");
const router = express.Router();
const { createService, updateService, getServices } = require("../../controllers/admin/admin/serviceController");

// Admin routes for service management
router.post("/createService", createService); 
router.put("/updateService/:id", updateService); 
router.get("/getService", getServices); 

module.exports = router;
