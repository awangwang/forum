import React from 'react'
import "./RubyShop.css"
import { FaTimes } from 'react-icons/fa'
import Ruby from '../Assets/Ruby.png'

const RubyShop = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <FaTimes 
                className='close-button'
                onClick={() => {props.setTrigger(false)}}
            />
            <h1 className='title'>
                Kyros Rubies Store
                <button className='ruby-button' >
                    <h2>1234</h2>
                    <img src={Ruby} alt="ruby"></img>
                </button>
            </h1>
            
            {props.children}
        </div>
    </div>
  ) : "";
}

export default RubyShop