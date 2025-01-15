const Appointment = require("../../../models/Booking");

// const createBooking = async (req, res) => {
//   try {
//     const { clientName, email, phone, date, service } = req.body;
//     const booking = await Appointment.create({
//       clientName,
//       email,
//       phone,
//       date,
//       service,
//     });
//     res.status(201).json({
//       message: "Booking created successfully",
//       booking,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error in creating booking",
//       error: error.message,
//     });
//   }
// };

const getBooking = async (req, res) => {
  try {
    const bookings = await Appointment.find().populate("service");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "error in getting bookings",
      error: error.message,
    });
  }
};


module.exports = {  getBooking };
