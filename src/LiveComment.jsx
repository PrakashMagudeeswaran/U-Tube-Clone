import React, { useEffect, useState } from 'react'
import Chats from './Chats'
import './index.css'
import { USER_LINK } from '../Components/Links'
import { useDispatch, useSelector } from 'react-redux'
import { chatLoading } from '../Components/chatsSlice'
import { generate2 } from './Generation'
const LiveComment = () => {
  const[inputValue,setinputValue]=useState()
 const mockDatas=useSelector(store=>store.chat.messages)
  const dispatch=useDispatch()
useEffect(()=>{
 
 const i= setInterval(()=>{
  dispatch (chatLoading({
    name:generate2(8) ,
    comment:generate2(25)
  }))
  },5000)

return()=>clearTimeout(i)


},[])

const handleChat=(e)=>{
  e.preventDefault()
  dispatch (chatLoading({
    name:"Human" ,
    comment:inputValue
  }))
}

  return (
    <>
    <div >
    <p className="alien" >I can't afford to buy Google API, but thanks to Aliens for letting me access their Discord Chat</p> 
      <div className="livechat">
     
     {mockDatas.map(mockData=>
     <><Chats
      name={mockData.name}
      comment={mockData.comment}/>
      <img src={USER_LINK} alt="user" height="40px" width="40px"/>
      </>
      
      )} 
       
    </div>
    <form className="liveform">
      <input onChange={(e)=>{setinputValue(e.target.value)}} value={inputValue} type="text"/>
      <button onClick={(e)=>handleChat(e)}>^</button></form>
    </div>

    </>
  )
}

export default LiveComment
