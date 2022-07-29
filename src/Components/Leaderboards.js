import React from 'react'
import Clock from '../Assets/Clock.png'
import Trophy from '../Assets/Trophy.png'


import Board from './Popup/board'
import './Popup/style.css'

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

      
      <div className="App" id='main'>
        <Board></Board>
    </div>  

    
      </Popup>
    </div>
  )
}
