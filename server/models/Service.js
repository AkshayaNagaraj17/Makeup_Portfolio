// server/models/Service.js
const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Add other fields if needed
});

module.exports = mongoose.model("Service", ServiceSchema);
