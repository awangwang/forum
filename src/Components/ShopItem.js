import React from 'react'
import Ruby from '../Assets/Ruby.png'
import Background from '../Assets/Background.png'
import { useState } from 'react'

const ShopItem = (props) => {
  // props.count = price of item
  let [purchased, setPurchased] = useState(false)

  const purchaseItem = () => {
    if (purchased) {
      return
    }
    props.setRubyCount(props.count + props.rubyCount)
    setPurchased(true)
  }

  return (
    <div className="item-frame">
      <img src={Background} alt="Image" className='item-image'/>
      <div className='item-text'>
        <h2>{props.description}</h2>
        <a className='ruby-title-about' href="">View on full screen</a>
      </div>
      <button className='ruby-button' onClick={() => purchaseItem()} style={{"backgroundColor": purchased ? "grey" : ""}}>
        <h2>{!purchased ? props.count : "Purchased"}</h2>
        {
          !purchased ?
          (<img src={Ruby} alt="ruby"></img>) : ""
        }
      </button>
    </div>
  )
}

export default ShopItem