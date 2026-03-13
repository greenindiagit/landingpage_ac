import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true
  },

  bookingDate: {
    type: Date,
    required: true
  },

  timeSlot: {
    start: String,
    end: String
  },

  totalPrice: Number,

  status: {
    type: String,
    enum: ["pending","confirmed","cancelled","completed"],
    default: "pending"
  }
},
{ timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);