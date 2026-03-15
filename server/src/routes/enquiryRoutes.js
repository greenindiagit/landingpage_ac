import express from "express";
import { createEnquiry, getEnquiry, getEnquiryById } from "../controllers/EnquiryController.js";

const router = express.Router();

router.post("/enquiry", createEnquiry);
router.get("/enquiry", getEnquiry);
router.get("/enquiry/:id", getEnquiryById);

export default router;