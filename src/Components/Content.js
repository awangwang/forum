import React from 'react'
import Filter from './Filter';
import NewPost from './NewPost';
import Post from './Post';

export default function Content() {
  return (
    <div className='flex-gap'>
        <Filter />
        <NewPost />
        <Post />
        <Post />
        <Post />
    </div>
  )
}
