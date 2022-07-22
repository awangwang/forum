import React from 'react'
import Ruby from '../Assets/Ruby.png'

export default function RecentRubies({image, text, count, date}) {
  return (
    <>
      <div className='recent-container'>
        <div className='recent-part'>
        <img src={image} alt="icon" />
        <h2 className='recent-text'>{text}</h2>
        </div>
        <div className="recent-part recent-rubies">
          <h2 className='recent-text'>+{count}</h2>
          <img src={Ruby} alt="ruby" />
        </div>
        <h2 className='recent-text'>{date}</h2>
      </div>
    </>
  )
}
