import React from 'react'
import Clock from '../Assets/Clock.png'
import Hot from '../Assets/Hot.png'
import Joined from '../Assets/Joined.png'
import Notification from '../Assets/Notification.png'
import Saved from '../Assets/Saved.png'

export default function Filter() {
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
                <h2 className='filter-text'>NOTIFICATION</h2>
            </div>
        </div>
    )
}
