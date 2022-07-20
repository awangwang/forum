import React from 'react'
import Clock from '../Assets/Clock.png'
import Trophy from '../Assets/Trophy.png'

export default function Leaderboards() {
  return (
    <div className='leaderboards sidebar-container'>
      <div className="group">
      <h2 className='sidebar-text'>Leaderboard</h2>
      <img className='img-margin' src={Trophy} alt="trophy" />
      </div>
      <hr className="sidebar-separator" />
      <div className='group'>
        <img src={Clock} alt="medal" />
        <h2 className='award-name'>John Doe</h2>
        <h2 className='award-time'>10h 1m</h2>
      </div>
      <hr className="sidebar-separator" />
      <div className='group'>
        <img src={Clock} alt="medal" />
        <h2 className='award-name'>John Doe</h2>
        <h2 className='award-time'>10h 1m</h2>
      </div>
      <hr className="sidebar-separator" />
      <div className='group'>
        <img src={Clock} alt="medal" />
        <h2 className='award-name'>John Doe</h2>
        <h2 className='award-time'>10h 1m</h2>
      </div>
      <hr className="sidebar-separator" />
    </div>
  )
}
