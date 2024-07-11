import React from 'react'
import Placeholder from '../ui/Placeholder'

const Footer = () => {
	return (
		<footer className='bg-neutral-900 text-primary-100 pt-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
				<div className='col-span-1 md:col-span-2 md:text-left text-center font-hubot font-black'>
					<p className='m-0 text-[14vw] md:text-[13vw] text-center leading-none'>
						SBK STUDIO
					</p>
				</div>

				<nav
					aria-label='Footer navigation'
					className='col-span-1 md:col-span-2 pt-4'>
					<div className='flex items-end justify-between pb-4'>
						<div className='flex justify-center md:justify-start'>
							<a
								href='/contact'
								className='hover:text-secondary-500 transition-colors'>
								Contact
							</a>
						</div>
						<div className='text-center md:text-right'>
							<a
								href='mailto:hello@sbkstudio.com'
								className='hover:text-secondary-500 transition-colors'>
								hello@sbkstudio.com
							</a>
						</div>
					</div>

					<ul className='flex flex-wrap border-t border-secondary-500 justify-center  space-x-4 p-0 m-0'>
						<li>
							<a
								href='/about'
								className='hover:text-secondary-500 transition-colors'>
								About
							</a>
						</li>
						<li>
							<a
								href='#portfolio'
								className='hover:text-secondary-500 transition-colors'>
								Portfolio
							</a>
						</li>
						<li>
							<a
								href='/services'
								className='hover:text-secondary-500 transition-colors'>
								Services
							</a>
						</li>
						<li>
							<a
								href='/blog'
								className='hover:text-secondary-500 transition-colors'>
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
