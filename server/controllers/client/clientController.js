const Portfolio = require("../../models/Portfolio");
const Booking = require("../../models/Booking");
const Service = require("../../models/Service");
const User = require("../../models/User");

const getBooking = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found .Please log in first" });
    }

    res.status(200).json({ message: "User exists", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { clientName, email, phone, date, service, venue } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required for booking" });
    }

    // 🔥 Check if the email exists in the User collection
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    // ✅ If email exists, proceed with booking
    const booking = await Booking.create({
      clientName,
      email,
      phone,
      date,
      venue,
      service,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      message: "Error in creating booking",
      error: error.message,
    });
  }
};



const getService = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching services",
      error: error.message,
    });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching portfolio",
      error: error.message,
    });
  }
};

module.exports = { createBooking, getBooking, getService, getPortfolio };
