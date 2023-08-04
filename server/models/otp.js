import mongoose, { mongo } from "mongoose";

const otpSchema = mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: Number, required: true, expires: "1h", },

})
export default mongoose.model("Otp", otpSchema);