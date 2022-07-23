import React from 'react'
import '../App.css';
import Ruby from '../Assets/Ruby.png'

export default function Navbar({rubyCount}) {
  return (
    <div className='navbar'>
      <a href="/rubies">
        <img className='ruby' src={Ruby} alt="ruby" />
        <h1 className='ruby-number'>{rubyCount}</h1>
      </a>
    </div>
  )
}
