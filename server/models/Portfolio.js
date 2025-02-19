// server/models/Portfolio.js
const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  image: { type: String, required: true }, // This will store the base64 image string
  // You can add additional fields like title, description, etc.
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
