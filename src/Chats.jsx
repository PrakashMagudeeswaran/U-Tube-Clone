import React from 'react'
import './index.css'
const Chats = ({name,comment}) => {
  return (
    <div>
      <p className="unique">{name}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Chats
