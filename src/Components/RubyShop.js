import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Ruby from '../Assets/Ruby.png'
import ShopItem from './ShopItem'

const RubyShop = (props) => {
	return (props.trigger) ? (
		<div className='popup'>
			<div className='popup-inner'>
				<FaTimes
					className='popup-close-button'
					onClick={() => { props.setTrigger(false) }}
				/>
				<div className='popup-top'>
					<h1 className='popup-title'>
						Kyros Rubies Store
					</h1>
					<button className='ruby-button' >
						<h2>1000</h2>
						<img src={Ruby} alt="ruby"></img>
					</button>
				</div>
				<div className='popup-item-list'>
					<ShopItem description='Custom Home Page 1' count='200'/>
					<ShopItem description='Custom Home Page 2' count='100'/>					
					<ShopItem description='Custom Profile Frame 1' count='40'/>					
					<ShopItem description='Custom Profile Frame 2' count='60'/>					
					<ShopItem description='Custom Name Color 1' count='10'/>					
				</div>
				{props.children}
			</div>
		</div>
	) : "";
}

export default RubyShop