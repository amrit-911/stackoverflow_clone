import React, { useState } from 'react'
import ChatMainbar from './ChatMainbar'
import "./ChatButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faX } from '@fortawesome/free-solid-svg-icons'
import { fetchChat } from '../../actions/chat';
import { useDispatch } from 'react-redux'

const ChatButton = () => {
    const [trigger,setTrigger] = useState(false)
    const dispatch = useDispatch()
    const clickOn =()=>{
      setTrigger(true)
      if(JSON.parse(localStorage.getItem("Profile"))?.result?.email){
        dispatch(fetchChat({user: JSON.parse(localStorage.getItem("Profile")).result.email}))  }
    }
  return (
    <div className='button-container'>
        <div className='display-chat-mainbar'>
            {trigger?<ChatMainbar/>:""}
        </div>
        {trigger?
        <button className='chat-on-off-btn' onClick={()=> setTrigger(false)}>
            <FontAwesomeIcon icon={faX}/>
        </button>:
        <button className='chat-on-off-btn' onClick={clickOn}>
         <FontAwesomeIcon icon={faComment}  />
        </button>
        }
    </div>
  )
}

export default ChatButton