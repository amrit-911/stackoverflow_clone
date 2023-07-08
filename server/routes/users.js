import express from 'express'
const router = express.Router()
import { login, signup } from '../controllers/auth.js'
import { getAllUsers, updateProfile } from "../controllers/users.js";
import token from "../middlewares/token.js"

router.post("/signup", signup)
router.post("/login", login)

router.get("/getAllUsers", getAllUsers)
router.patch("/update/:id", token, updateProfile)

export default router