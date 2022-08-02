import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Notification</h1>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div>
  )
}



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with ascending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return a.score - b.score;
        } else{
            return a.score - b.score;
        }
    })

}
