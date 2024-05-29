import React from 'react'
import VideoCard from './VideoCard'
import {useSelector} from 'react-redux'
import './index.css'
import { Link } from 'react-router-dom'


const Videos = () => {

  

  const detail=useSelector(store=>store.home.mostpopular?.items)

  if (!detail ) return null 
  return (
    <>
   <div className="overall">
    {detail.map(result=>(
       <div key={result.id} >
      <Link to={"/watch?v="+result.id.videoId}><VideoCard
      result={result}
      /></Link> </div>
      ))}</div>
     
  </>
  )
}

export default Videos
