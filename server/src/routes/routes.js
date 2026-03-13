import express from "express";
import booking from "./bookingRoutes.js"



const router = express.Router();

router.use("/booking", booking);

export default router;