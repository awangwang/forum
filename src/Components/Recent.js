import React from 'react'
import Bookmark from '../Assets/Bookmark.png'
import Ruby from '../Assets/Ruby.png'

export default function RecentRubies() {
  return (
    <>
      <div className='recent-container'>
        <div className='recent-part'>
        <img src={Bookmark} alt="" />
        <h2 className='recent-text'>You saved someone's post!</h2>
        </div>
        <div className="recent-part recent-rubies">
          <h2 className='recent-text'>+2</h2>
          <img src={Ruby} alt="" />
        </div>
        <h2 className='recent-text'>7/21/22</h2>
      </div>
    </>
  )
}
