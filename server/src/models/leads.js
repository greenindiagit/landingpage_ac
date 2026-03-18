import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true, 
      match: /^[0-9]{10,15}$/, 
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/, 
    },

    created_time: {
      type: Date,
      default: Date.now, 
    },

    service: {
      type: String,
      trim: true,
    },

    source: {
      type: String,
      default: "Meta Ads",
      enum: ["Meta Ads", "Website", "Google Ads", "Manual"],
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Follow-up", "Closed"],
      default: "New",
    },

    notes: {
      type: String, // CRM notes
      trim: true,
    },

    assignedTo: {
      type: String, 
    },

    isDuplicate: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true }
);

// 📌 Index for fast search
LeadSchema.index({ phone: 1 });
LeadSchema.index({ created_time: -1 });
LeadSchema.index({ status: 1 });

const Leads = mongoose.model("Lead", LeadSchema);

export default Leads;