import React from 'react'
import Clock from '../Assets/Clock.png'
import Hot from '../Assets/Hot.png'
import Joined from '../Assets/Joined.png'
import Notification from '../Assets/Notification.png'
import Saved from '../Assets/Saved.png'

import Board from './Popup2/board'
import './Popup/style.css'

import Popup from './Popup2/Popup.js'
import './Popup/Popup.css';

import { useState } from 'react'; 

export default function Filter() {
    
const[buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='filter-bar'>
            <div className='group'>
                <img src={Clock} alt="clock" />
                <h2 className='filter-text'>NEW</h2>
            </div>
            <div className='group'>
                <img src={Hot} alt="hot" />
                <h2 className='filter-text'>HOT</h2>
            </div>
            <div className='group'>
                <img src={Joined} alt="hot" />
                <h2 className='filter-text'>JOINED</h2>
            </div>
            <div className='group'>
                <img src={Saved} alt="hot" />
                <h2 className='filter-text'>SAVED</h2>
            </div>
            <div className='group'>
                <img src={Notification} alt="hot" />
                <button onClick = {() => setButtonPopup(true)} className='filter-text'>NOTIFICATION</button>
            </div>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                <div className="App" id='main'>
                    <Board></Board>
                </div>
            </Popup>
        </div>
    )
}
