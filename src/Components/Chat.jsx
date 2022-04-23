import React from 'react';
import { useEffect, useState } from 'react';
import socketio from "socket.io-client"
import "../Styles/Chatstyles.css"
const SERVER = "https://hire-cook-chatbot.herokuapp.com/";
export const Chat = ()=>{
    var socket =  socketio.connect(SERVER);
  const [text,setText] = useState([])
  const [messages,setMessages] = useState([])
  const handleChange = (e)=>{
    const {id,value} = e.target
    setText(value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    socket.emit('chat message',text);
  }
  console.log(text)
  socket.on('chat message', function(msg) {
    setMessages([...messages,msg])
  });
  useEffect(()=>{
    setTimeout(() => {
      if(messages.length%2==1){
        setMessages([...messages,"Our chef will contact you soon Thanks for using chat bot"])
      }
    }, 500);
  })
    return (
      <div className='chatcontainer'>
          <div id="chatcont2">
          <ul id="chatmessages" style={{listStyleType:"none"}}>
    {
      messages.map((e,i)=><li className='chatlist' key={i}>{e}</li>)
    }
  </ul>
          </div>
          <div>
          <form id="chatform" onSubmit={handleSubmit}>
    <input id="chatinput" onChange={handleChange}  /><button id="chatsend">Send</button>
  </form>
          </div>
      </div>
  )
}
