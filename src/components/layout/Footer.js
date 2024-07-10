import React from 'react'
import Placeholder from '../ui/Placeholder'

const Footer = () => {
	return (
		<footer>
			<Placeholder width={100} height={40} type='icon' />
			<a href='mailto:example@example.com'>hello@sbkstudio.com</a>
			<p className='font-hubot font-black text-9xl'>SBK STUDIO</p>
			<nav aria-label='Footer navigation'>
				<ul>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li>
						<a href='/services'>Services</a>
					</li>
					<li>
						<a href='/blog'>Blog</a>
					</li>
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
