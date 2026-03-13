import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {

    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking
    });

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};


export const getAllBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("userId")
      .populate("serviceId");

    res.status(200).json({
      success:true,
      count: bookings.length,
      data: bookings
    });

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};


export const getBookingById = async (req,res)=>{
  try{

    const booking = await Booking.findById(req.params.id);

    if(!booking){
      return res.status(404).json({
        success:false,
        message:"Booking not found"
      });
    }

    res.json({
      success:true,
      data:booking
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
};


export const updateBooking = async (req,res)=>{
  try{

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );

    res.json({
      success:true,
      data:booking
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
};


export const deleteBooking = async (req,res)=>{
  try{

    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      success:true,
      message:"Booking deleted"
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
};