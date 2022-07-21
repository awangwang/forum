import React from 'react'
import '../App.css';
import Ruby from '../Assets/Ruby.png'
import Number from '../Assets/Number.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img className='ruby' src={Ruby} alt="ruby" />
      <img className='ruby-number' src={Number} alt="ruby-number" />
    </div>
    
  )
}
