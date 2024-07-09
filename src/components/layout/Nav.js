import React from 'react'
import Placeholder from '../ui/Placeholder'

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href='/'>
						<Placeholder width={100} height={40} type='icon' />
					</a>
				</li>
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
	)
}
