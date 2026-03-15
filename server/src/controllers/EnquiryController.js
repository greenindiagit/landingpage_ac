import Enquiry from "../models/Enquiry.js";


// Create Enquiry
export const createEnquiry = async (req, res) => {
  try {

    const enquiry = new Enquiry(req.body);

    const savedEnquiry = await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry created successfully",
      data: savedEnquiry,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


// Get All Enquiries
export const getEnquiry = async (req, res) => {
  try {

    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: enquiries
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};


// Get Single Enquiry
export const getEnquiryById = async (req, res) => {
  try {

    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.json({
      success: true,
      data: enquiry
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};