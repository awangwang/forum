import React from 'react'
import { FaIcons } from 'react-icons/fa'
import './ShopItem.css'
import Ruby from '../Assets/Ruby.png'

const ShopItem = (props) => {
  return (
    <div className="item-frame">
        <FaIcons className="item-image"></FaIcons>
        <div>
            <span className="item-name">{props.itemName}</span>
        </div>
        <button className='ruby-button' style={{right: 0}} >
            <h2>1234</h2>
            <img src={Ruby} alt="ruby"></img>
        </button>
    </div>
  )
}

export default ShopItem