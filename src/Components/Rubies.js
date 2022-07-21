import React from 'react'
import Ruby from '../Assets/Ruby.png'
import Recent from './Recent'

export default function Rubies() {
  return (
    <div className='ruby-page'>
      <div className='ruby-navbar'>
        <button className='ruby-button'>Visit Ruby Store</button>
        <div className='ruby-title'>
          <h2 className='ruby-title-text'>My Kyros Rubies</h2>
          <a className='ruby-title-about' href="">About Kyros Rubies</a>
        </div>
        <button className='ruby-button'>
          <h2>#</h2>
          <img src={Ruby} alt="ruby" />
        </button>
      </div>

      <div className='ruby-content'>
        <h2 className='ruby-recently-earned'>Recently Earned</h2>
        <Recent />
        <Recent />
        <Recent />
        <Recent />
        <Recent />
      </div>
    </div>
  )
}
