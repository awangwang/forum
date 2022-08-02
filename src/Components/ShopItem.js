import React from 'react'
import Ruby from '../Assets/Ruby.png'
import Background from '../Assets/Background.png'

const ShopItem = (props) => {
  return (
    <div className="item-frame">
      <img src={Background} alt="Image" className='item-image'/>
      <div className='item-text'>
        <h2>{props.description}</h2>
        <a className='ruby-title-about' href="">View on full screen</a>
      </div>
      <button className='ruby-button' onClick={() => props.setRubyCount(props.count + props.rubyCount)}>
        <h2>{props.count}</h2>
        <img src={Ruby} alt="ruby"></img>
      </button>
    </div>
  )
}

export default ShopItem