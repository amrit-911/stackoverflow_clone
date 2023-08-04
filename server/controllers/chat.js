import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();
import Chat from "../models/chat.js"
const config = new Configuration({
    apiKey: process.env.CHAT_API
})

const openai = new OpenAIApi(config)

export const chatapi = async(req, res) => {
    const { prompt } = req.body
    const { user } = req.body
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 400,
            temperature: 1,
            prompt: prompt
        })
        const existingChat = Chat.findOne({ user })
        if (!existingChat) {
            Chat.create({
                user: user,
                chat: [{
                    prompt: prompt,
                    text: completion.data.choices[0].text
                }]
            })
            res.status(200).json({ message: "Chat created" })
        } else {
            const updatedChat = await Chat.findOneAndUpdate({ user }, {
                $push: {
                    chat: [{
                        prompt: prompt,
                        text: completion.data.choices[0].text
                    }]
                }
            }, { upsert: true })
            res.status(200).json({ message: "Chat updated", data: updatedChat })
        }
    } catch (error) {
        console.log(error)
    }
}
export const fetchChat = async(req, res) => {
    const { user } = req.body
    try {
        const fetchData = await Chat.findOne({ user })
        if (fetchData) {
            res.status(200).json({ message: fetchData })
        } else {
            Chat.create({
                user: user,
                chat: [{
                    prompt: "Hello ai",
                    text: "Hii"
                }]
            })
            res.status(200).json({ message: fetchData })
        }
    } catch (err) {
        console.log(err)
    }
}