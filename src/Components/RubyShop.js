import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Ruby from '../Assets/Ruby.png'
import ShopItem from './ShopItem'

const RubyShop = ({trigger, setTrigger, rubyCount, setRubyCount, purchasedItems, setPurchasedItems}) => {
	const purchaseItem = (item_id) => {
		setPurchasedItems(Object.assign(purchasedItems, {[item_id]: true}))
	}


	return (trigger) ? (
		<div className='popup'>
			<div className='popup-inner'>
				<FaTimes
					className='popup-close-button'
					onClick={() => { setTrigger(false) }}
				/>
				<div className='popup-top'>
					<h1 className='popup-title'>
						Kyros Rubies Store
					</h1>
					<button className='ruby-button' >
						<h2>{rubyCount}</h2>
						<img src={Ruby} alt="ruby"></img>
					</button>
				</div>
				<div className='popup-item-list'>
					<ShopItem description='Custom Home Page 1' count={200} rubyCount={rubyCount} setRubyCount={setRubyCount} purchaseItem={purchaseItem} purchasedItems={purchasedItems}/>
					<ShopItem description='Custom Home Page 2' count={100}  rubyCount={rubyCount} setRubyCount={setRubyCount} purchaseItem={purchaseItem} purchasedItems={purchasedItems}/>					
					<ShopItem description='Custom Profile Frame 1' count={40}  rubyCount={rubyCount} setRubyCount={setRubyCount} purchaseItem={purchaseItem} purchasedItems={purchasedItems}/>					
					<ShopItem description='Custom Profile Frame 2' count={60}  rubyCount={rubyCount} setRubyCount={setRubyCount} purchaseItem={purchaseItem} purchasedItems={purchasedItems}/>					
					<ShopItem description='Custom Name Color 1' count={10} rubyCount={rubyCount} setRubyCount={setRubyCount} purchaseItem={purchaseItem} purchasedItems={purchasedItems}/>					
				</div>
			</div>
		</div>
	) : "";
}

export default RubyShop