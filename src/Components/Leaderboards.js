import React from 'react'
import Clock from '../Assets/Clock.png'
import Trophy from '../Assets/Trophy.png'


import Popup from './Popup/Popup.js'
import './Popup/Popup.css';

import { useState } from 'react';

export default function Leaderboards() {
const[buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='leaderboards sidebar-container'>
      <div className="group">
      <button onClick={() => setButtonPopup(true) } className='sidebar-text'>Leaderboard</button>
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
      <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
      <div className='leaderboard-popup'>
            <h2 className='leaderboard-header'>Leaderboard</h2>
            <h3 className='leaderboard-statistics' style={{top:'120px', color: 'gold'}}>1</h3>
            <h3 className='leaderboard-statistics' style={{top:'250px', color: 'silver'}}>2</h3>
            <h3 className='leaderboard-statistics' style={{top:'380px', color:'#CD7F32'}}>3</h3>
            <h3 className='leaderboard-statistics' style={{top:'510px', color: 'gray'}}>4</h3>
        </div>
      </Popup>
    </div>
  )
}