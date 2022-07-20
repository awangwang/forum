import React from 'react'
import '../App.css';
import Logo from "../Assets/Search.png"

export default function Search() {
  return (
    <div className='search' >
        <img className="icon" src={Logo} alt="search-icon" />
        <input className='input' type="text" placeholder='Search Anything' />
    </div>
  )
}
