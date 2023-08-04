import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    user: { type: String, required: true },
    chat: [{
        prompt: { type: String, required: true },
        text: { type: String, required: true }
    }]
})
export default mongoose.model("Chat", chatSchema);