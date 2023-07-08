import express from "express";

import { postAnswer, deleteAnswer } from "../controllers/Answers.js";
import token from "../middlewares/token.js";

const router = express.Router();

router.patch("/post/:id", token, postAnswer);
router.patch("/delete/:id", token, deleteAnswer);

export default router;