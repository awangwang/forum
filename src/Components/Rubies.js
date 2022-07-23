import React from 'react'
import Ruby from '../Assets/Ruby.png'
import Recent from './Recent'
import Bookmark from '../Assets/Bookmark.png'
import Arrow from '../Assets/Arrow.png'
import Bubble from '../Assets/Bubble.png'
import Created from '../Assets/Created.png'
import Community from '../Assets/Community.png'

export default function Rubies({rubyCount}) {
  return (
    <div className='ruby-page'>
      <div className='ruby-navbar'>
        <button className='ruby-button'>Visit Ruby Store</button>
        <div className='ruby-title'>
          <h2 className='ruby-title-text'>My Kyros Rubies</h2>
          <a className='ruby-title-about' href="/">About Kyros Rubies</a>
        </div>
        <button className='ruby-button'>
          <h2>{rubyCount}</h2>
          <img src={Ruby} alt="ruby" />
        </button>
      </div>

      <div className='ruby-content'>
        <h2 className='ruby-recently-earned'>Recently Earned</h2>
        <Recent 
          image={Bookmark} 
          text="You saved someone's post!" 
          count="1" 
          date="7/21/22"
        />
        <Recent 
          image={Arrow} 
          text="You upvoted someone's post!" 
          count="1" 
          date="7/15/22"
        />
        <Recent 
          image={Bubble} 
          text="You answered someone's question!" 
          count="2" 
          date="7/10/22"
        />
        <Recent 
          image={Created} 
          text="You created a new post!" 
          count="3" 
          date="6/25/22"
        />
        <Recent 
          image={Community} 
          text="You joined a community!" 
          count="5" 
          date="6/10/22"
        />
      </div>
    </div>
  )
}
