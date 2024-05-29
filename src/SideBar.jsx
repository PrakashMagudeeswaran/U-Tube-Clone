import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { hamburgfunc } from '../Components/homeSlice'

const SideBar = () => {
  const dispatch= useDispatch()
  return (
    <div className="sidebar">
      <div className="sidebar1">
     <Link to="/"> <h4 onClick={()=>{dispatch(hamburgfunc())}}>Home</h4></Link>
      <h4>Shorts</h4>
      <h4>Subscriptions</h4> </div>
     <div className="sidebar2">
       <h4>You</h4>
       <p1>History</p1>
       <p>Playlist</p>
       <p>Watch Later</p>
       <p>Liked Videos</p>
     </div>
     <div className="sidebar3">
       <h4>Explore</h4>
       <p1>Trending</p1>
       <p>Shopping</p>
       <p>Music</p>
       <p>Movies</p>
       <p>Gaming</p>
       <p>News</p>
       <p>Sports</p>
     </div>
    </div>
  )
}

export default SideBar
