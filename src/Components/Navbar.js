import React from 'react'
import '../App.css';
import Ruby from '../Assets/Ruby.png'
import Number from '../Assets/Number.png'

export default function Navbar() {
  const rubyNumber = 1000;
  
  return (
    <div className='navbar'>
      <a href="/rubies">
        <img className='ruby' src={Ruby} alt="ruby" />
        <h1 className='ruby-number'>{rubyNumber}</h1>
      </a>
    </div>
  )
}
