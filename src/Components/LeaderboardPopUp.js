import React from 'react'

export default function LeaderboardPopUp() {
    return (
        <div className='LeaderboardPopUp'>
            <h2 className='LeaderboardHeader'>
                Leaderboard
            </h2>
            <h3 className='LeaderboardStatics' style={{top:'120px', color: 'gold'}}>
                1
            </h3>
            <h3 className='LeaderboardStatics' style={{top:'250px', color: 'silver'}}>
                2
            </h3>
            <h3 className='LeaderboardStatics' style={{top:'380px', color:'#CD7F32'}}>
                3
            </h3>
            <h3 className='LeaderboardStatics' style={{top:'510px', color: 'gray'}}>
                4
            </h3>
        </div>
    )
}