// server/controllers/portfolioController.js
const Portfolio = require("../../../models/Portfolio");

// Add a new portfolio item
const addPortfolioItem = async (req, res) => {
  try {
    // Expecting the client to send { image: <base64String> }
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ message: "No image data provided" });
    }

    const portfolioItem = await Portfolio.create({
      image,
    });

    res.status(201).json({
      message: "Portfolio item added successfully",
      portfolioItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding portfolio item",
      error: error.message,
    });
  }
};

module.exports = {
  addPortfolioItem,
};
