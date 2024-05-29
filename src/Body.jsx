import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import {useSelector} from 'react-redux'
import MainCompoenent from './MainCompoenent'

const Body = () => {
  const showbar=useSelector(store=>store.home.sidebar)
  return (
   <>
  
      <Header/>
      <div className="layout">
      {showbar? (
      <SideBar/>):null}
          <MainCompoenent/>
      </div> 
      </>
  
     
  )
}

export default Body
