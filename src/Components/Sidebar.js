import React from 'react'
import Communities from './Communities'
import Leaderboards from './Leaderboards'
import Messages from './Messages'

export default function Sidebar() {
  return (
    <div className='flex-gap'>
        <Communities />
        <Leaderboards />
        <Messages />
    </div>
  )
}
