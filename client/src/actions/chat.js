import * as api from "../api/index";

export const updateChat = (chatData, otpdata) => async(dispatch) => {
    const { data } = await api.updateChat(chatData)
    dispatch({ type: "UPDATE_CHAT", data })
    dispatch(fetchChat({ user: otpdata }))
}

export const fetchChat = (chatData) => async(dispatch) => {
    const { data } = await api.getChat(chatData)
    dispatch({ type: "GET_CHAT", data })
}