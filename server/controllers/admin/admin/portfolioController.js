const Portfolio = require("../../../models/Portfolio");

// Add a new portfolio item
const addPortfolioItem = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const portfolioItem = await Portfolio.create({
      title,
      description,
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
const updatePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    res.status(200).json({
      message: "Portfolio item updated successfully",
      updatedPortfolio,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating portfolio item",
      error: error.message,
    });
  }
};

const deletePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;

    await Portfolio.findByIdAndDelete(id);

    res.status(200).json({
      message: "Portfolio item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting portfolio item",
      error: error.message,
    });
  }
};

module.exports = {
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
};
