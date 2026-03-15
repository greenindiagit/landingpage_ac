import express from "express";
import enquiries from "./enquiryRoutes.js"



const router = express.Router();

router.use("/enquiries", enquiries);

export default router;