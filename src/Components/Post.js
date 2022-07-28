import React from 'react'
import Up from '../Assets/Up.png'
import Down from '../Assets/Down.png'
import Reply from '../Assets/Reply.png'
import Repost from '../Assets/Repost.png'
import Save from '../Assets/Save2.png'
import Send from '../Assets/Send.png'

export default function Post() {
	return (
		<div className='post'>
			<div className='vote'>
				<img src={Up} alt="up" />
				<h2>16</h2>
				<img src={Down} alt="down" />
			</div>
			<div className='post-body'>
				<div className='title'>
					<h2 className='title-name'>Extracurriculars</h2>
					<p className='title-details'>Posted by Sharon Mitchell</p>
					<p className='title-label'>Student</p>
					<p className='title-details'>5 minutes ago</p>
				</div>
				<p>Can anyone give me any tips on how to be a better softball player? </p>
				<div className='post-actions'>
					<div className='group'>
						<img src={Reply} alt="reply" />
						<h2 className='title-name'>Reply</h2>
					</div>
					<div className='group'>
						<img src={Repost} alt="repost" />
						<h2 className='title-name'>Repost</h2>
					</div>
					<div className='group'>
						<img src={Save} alt="save" />
						<h2 className='title-name'>Save</h2>
					</div>
					<div className='group'>
						<img src={Send} alt="send" />
						<h2 className='title-name'>Send</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
