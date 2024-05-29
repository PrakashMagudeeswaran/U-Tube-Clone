import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import {useSelector} from 'react-redux'
import VideoFinal from './VideoFinal'
const WatchPage = () => {
  const showbar=useSelector(store=>store.home.sidebar)
  return (
    <div>
      <Header/>
      <div className="layout">
      {showbar? (
      <SideBar/>):null}
      <VideoFinal/>
      </div>
    </div>
  )
}

export default WatchPage
