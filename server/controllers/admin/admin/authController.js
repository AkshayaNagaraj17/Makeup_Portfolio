const User = require("../../../models/User"); // Assuming the same User schema for admin
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const adminExists = await User.findOne({ email, isAdmin: true });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create admin user
    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin: true, // Flag to differentiate admin users
    });

    res
      .status(201)
      .json({ message: "Admin account created successfully", admin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering admin", error: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for admin user
    const admin = await User.findOne({ email, isAdmin: true });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { userID: admin._id.toString(), isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Admin login successful", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in admin", error: error.message });
  }
};

module.exports = { adminSignup, adminLogin };
