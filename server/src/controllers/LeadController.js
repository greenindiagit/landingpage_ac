import axios from "axios";
import Leads from "../models/leads.js";


// 🔐 Webhook Verification
export const verifyWebhook = (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
};


// 📥 Receive Meta Lead
export const receiveLead = async (req, res) => {
  try {
    const entry = req.body.entry;

    if (entry?.length > 0) {
      const changes = entry[0].changes;

      if (changes?.length > 0) {
        const leadgen_id = changes[0].value.leadgen_id;

        // Fetch lead from Meta API
        const response = await axios.get(
          `https://graph.facebook.com/v18.0/${leadgen_id}`,
          {
            params: {
              access_token: process.env.ACCESS_TOKEN,
            },
          }
        );

        const data = response.data;

        let name = "";
        let phone = "";
        let email = "";

        data.field_data.forEach((field) => {
          if (field.name === "full_name") name = field.values[0];
          if (field.name === "phone_number") phone = field.values[0];
          if (field.name === "email") email = field.values[0];
        });

        // 🔍 Check duplicate
        const existingLead = await Leads.findOne({ phone });

        const newLead = new Leads({
          name,
          phone,
          email,
          created_time: data.created_time,
          isDuplicate: existingLead ? true : false,
        });

        await newLead.save();
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving lead:", error.message);
    res.sendStatus(500);
  }
};


// ➕ Create Lead
export const createLead = async (req, res) => {
  try {
    const { phone } = req.body;

    const existingLead = await Leads.findOne({ phone });

    if (existingLead) {
      return res.status(400).json({
        success: false,
        message: "Lead already exists with this phone number",
      });
    }

    const lead = await Leads.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating lead",
      error: error.message,
    });
  }
};


// 📄 Get All Leads
export const getAllLeads = async (req, res) => {
  try {
    const leads = await Leads.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching leads",
      error: error.message,
    });
  }
};


// 🔍 Get Single Lead
export const getLeadById = async (req, res) => {
  try {
    const lead = await Leads.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching lead",
      error: error.message,
    });
  }
};


// ✏️ Update Lead
export const updateLead = async (req, res) => {
  try {
    const lead = await Leads.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating lead",
      error: error.message,
    });
  }
};


// ❌ Delete Lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Leads.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting lead",
      error: error.message,
    });
  }
};