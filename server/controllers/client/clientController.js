const Portfolio =require("../../models/Portfolio")
const Booking=require("../../models/Booking")
const Service=require("../../models/Service")


const createBooking = async (req, res) => {
    try {
      const { clientName, email, phone, date, service } = req.body;
      const booking = await Appointment.create({
        clientName,
        email,
        phone,
        date,
        service,
      });
      res.status(201).json({
        message: "Booking created successfully",
        booking,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error in creating booking",
        error: error.message,
      });
    }
  };
  
  const getBooking = async (req, res) => {
    try {
      const bookings = await Booking.find().populate("service");
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({
        message: "error in getting bookings",
        error: error.message,
      });
    }
  };


  const getService=async(req,res)=>
  {
    try{
        const services=await Service.find();
        res.status(200).json(services)
    }
    catch(error){
        res.status(500).json(
            {
                message:"Error in fetching srvices",
                error:error.message
            }
        )
    }
}

    const getPortfolio=async(req,res)=>
        {
          try{
              const portfolio=await Portfolio.find();
              res.status(200).json(portfolio)
          }
          catch(error){
              res.status(500).json(
                  {
                      message:"Error in fetching portfolio",
                      error:error.message
                  }
              )
          }

  }


  module.exports={createBooking,getBooking,getService,getPortfolio}