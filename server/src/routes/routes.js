import express from "express";
import enquiries from "./enquiryRoutes.js"
import leads from "./webhookRoutes.js"

const router = express.Router();

router.use("/enquiries", enquiries);
router.use("/lead", leads);

export default router;