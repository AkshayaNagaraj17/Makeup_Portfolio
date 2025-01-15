const express = require("express");
const router = express.Router();
const { addService, updateService, deleteService } = require("../../controllers/admin/admin/serviceController");

// Admin routes for service management
router.post("/createService", addService,); 
router.put("/updateService/:id", updateService); 
router.get("/getService", deleteService ); 

module.exports = router;
