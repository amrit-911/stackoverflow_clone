import express from "express";
import {
    sendOpt,
    verifyOtp
} from "../controllers/otp.js";

const router = express.Router();

router.post("/send-otp", sendOpt);
router.post("/verify-otp", verifyOtp)

export default router;