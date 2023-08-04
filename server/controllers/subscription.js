import Razorpay from 'razorpay'
import dotenv from 'dotenv';
import crypto from 'crypto';
import users from '../models/auth.js';
dotenv.config();
const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
})