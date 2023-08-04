import React, { useState } from 'react'
import "./ChatButton.css"
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, verifyOtp } from '../../actions/otp';
import { fetchChat,updateChat } from '../../actions/chat'

const SetOtp = () => {

    const [trigger,setTrigger] = useState(true)
    const User = useSelector((state) => state.currentUserReducer);
    const [otp,setOtp] = useState("")
    const dispatch = useDispatch()

    const clickSendOtp = ()=>{
        if(!User){
            alert("login to continue")
        }else{
            dispatch(sendOtp({email: User?.result?.email}));
            setTrigger(false)
        }
    }

    const otpSubmit =() =>{
        if(User){            
        dispatch(verifyOtp({email:User?.result?.email,otp:otp}))
        dispatch(fetchChat({user:JSON.parse(localStorage.getItem("Profile"))?.result?.email}))
    }else{
        alert("not logged in")
    }
    }
 
  return (
    <div>
        <div className='sendotp'>
             {trigger?<div className='sendotp-container'><button onClick={clickSendOtp} className='sendotp-btn'>
                Send Otp
             </button>
             <div onClick={()=>{setTrigger(false)}} style={{cursor:"pointer"}} className='sendotp-already'>Already have a Otp?</div>
             </div> :
             <div className='enterotp'>
                <div>
                <label className='enterotp-label'  htmlFor="otp">Enter Otp</label>
                <input className='enterotp-input' type="text" onChange={(e)=>setOtp(e.target.value)} name='otp' value={otp}/></div>
                <button className='enterotp-submit' onClick={otpSubmit}>Submit</button>
                <button className='enterotp-back' onClick={()=>setTrigger(true)}>Go Back</button>

             </div>
             }
        </div>
    </div>
  )
}

export default SetOtp