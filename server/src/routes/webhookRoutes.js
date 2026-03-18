import express from "express";
import {
  verifyWebhook,
  receiveLead,
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../controllers/LeadController.js";

const router = express.Router();

// 🔐 Meta Webhook
router.get("/webhook", verifyWebhook);
router.post("/webhook", receiveLead);

// CRUD
router.post("/", createLead);
router.get("/", getAllLeads);
router.get("/:id", getLeadById);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

export default router;