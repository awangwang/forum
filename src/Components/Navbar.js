import React from 'react'
import '../App.css';
import Ruby from '../Assets/Ruby.png'
import Number from '../Assets/Number.png'

export default function Navbar() {
  const rubyNumber = 1000;
  
  return (
    <div className='navbar'>
      <div></div>
      <h1 className='ruby-number'>{rubyNumber}</h1>
      <img className='ruby' src={Ruby} alt="ruby" />
      <div></div>
    </div>
    
  )
}
