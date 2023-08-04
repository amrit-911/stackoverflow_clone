import React, { useEffect, useRef, useState } from 'react'
import "./ChatButton.css"
import SetOtp from './SetOtp'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChat,updateChat } from '../../actions/chat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const ChatMainbar = () => {
  const bottomRef = useRef(null);
  const dispatch = useDispatch()
  const OtpDetails = useSelector((state) => state.otpReducer);
  const Chat = useSelector((state)=>state.chatReducer);
  const [input,setInput] = useState("")
 
  useEffect(() => {
 bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [input,Chat,dispatch])
  const clickSendPrompt =() =>{
    dispatch(updateChat({user: OtpDetails?.data?.email,prompt:input},OtpDetails?.data?.email))
    setInput("")
    bottomRef.current?.scrollIntoView();
  }
  bottomRef.current?.scrollIntoView();

  return (
    <div className='chatmainbar'>
      {!OtpDetails?.data?.success&&
        <div><SetOtp/></div>}
      {OtpDetails?.data?.success&&<div className='chatbot-container'>
        <h3 className='h3'>StackOverflow Chatbot</h3>
        <div className='chat-container'>
          {
            Chat.data?.message?.chat?.map((item,index)=>
            <div key={index}>
              <div className='prompt'>
                <span className="span-chat-profile" >You</span>
                <div>{item.prompt}</div>
              </div>
              <div className='text'>
              <span className="span-chat-profile">AI</span>  
              <div>{item.text}</div>
              </div>
            </div>)
          }
              <div ref={bottomRef} />            

        </div>
        <div className='send-flex' style={{marginTop:"auto"}}>
     
        <input className='input-prompt' type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} />
        <button onClick={clickSendPrompt} className='chat-send'><FontAwesomeIcon className='icon' icon={faPaperPlane} /></button></div>
      </div>}
    </div>
  )
}
export default ChatMainbar