import React from 'react'
import { setkeyword } from '../Components/homeSlice'
import { useDispatch } from 'react-redux'
const Suggestions=["All","Music","Cinema","Gaming","Rahman","HarrisJayaraj","FullStack","React","Potate","Naruto","Movies","Anime","Jafar Panahi","C++","Data Structures","Fries","Christian Bale"]
const SuggesstionList = () => {
  const dispatch=useDispatch()
  return (
    <div className="suggestwhole">
    <div className="suggest">
     {Suggestions.map(suggestion=><p
     onClick={()=>{dispatch(setkeyword(suggestion))}}>{suggestion}</p>)} 
      

    </div></div>
  )
}

export default SuggesstionList
