const multer = require("multer");
const path = require("path");
const Portfolio = require("../../../models/Portfolio");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Set file size limit (5MB max)
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("image");

const addPortfolioItem = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const portfolioItem = await Portfolio.create({
        image: `/uploads/${req.file.filename}`,
      });

      res.status(201).json({
        message: "Portfolio item added successfully",
        portfolioItem,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding portfolio item",
      error: error.message,
    });
  }
};

module.exports = { addPortfolioItem };
