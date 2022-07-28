import React from 'react'
import Up from '../Assets/Up.png'

export default function Messages() {
  return (
    <div className='messages'>
      <h2 className="sidebar-text message-text">Direct Messages</h2>
      <img src={Up} alt="" />
    </div>
  )
}
