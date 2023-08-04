import express from "express";
const router = express.Router();
import { chatapi, fetchChat } from "../controllers/chat.js";

router.post("/prompt", chatapi)
router.post("/data", fetchChat)

export default router