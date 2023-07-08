import express from "express";

import {
    AskQuestion,
    getAllQuestions,
    deleteQuestion,
    voteQuestion,
} from "../controllers/Questions.js";
import token from "../middlewares/token.js"

const router = express.Router();

router.post("/Ask", token, AskQuestion);
router.get("/get", getAllQuestions);
router.delete("/delete/:id", token, deleteQuestion);
router.patch("/vote/:id", token, voteQuestion);

export default router;