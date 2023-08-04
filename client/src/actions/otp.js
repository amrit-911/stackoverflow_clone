import * as api from "../api/index";

export const sendOtp = (otpData) => async(dispatch) => {
    try {
        const { data } = await api.sendOtp(otpData)
        dispatch({ type: "SEND_OTP", data })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const verifyOtp = (otpData) => async(dispatch) => {
    try {
        const { data } = await api.verifyOtp(otpData)
        dispatch({ type: "VERIFY_OTP", data })
    } catch (error) {
        console.log(error)
    }
}