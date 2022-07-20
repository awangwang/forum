import React from 'react'
import Add from '../Assets/Add.png'
import Image from '../Assets/Image.png'

export default function NewPost() {
  return (
    <div className='create-post'>
      <img className='image' src={Add} alt="name" />
      <input className='create-input' placeholder='Create Post' type="text" />
      <img className='image' src={Image} alt="" />
    </div>
  )
}
