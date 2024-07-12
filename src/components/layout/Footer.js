import React from 'react'

const Footer = () => {
	return (
		<footer className='responsive-container bg-neutral-900 text-primary-100 pt-4'>
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

					<ul className='flex border-t border-primary-500 justify-center p-0 m-0'>
						<li className='p-1 md:p-2'>
							<a
								href='/about'
								className='hover:text-secondary-500 transition-colors'>
								About
							</a>
						</li>
						<li className='p-1 md:p-2'>
							<a
								href='#portfolio'
								className='hover:text-secondary-500 transition-colors'>
								Portfolio
							</a>
						</li>
						<li className='p-1 md:p-2'>
							<a
								href='/services'
								className='hover:text-secondary-500 transition-colors'>
								Services
							</a>
						</li>
						<li className='p-1 md:p-2'>
							<a
								href='/blog'
								className='hover:text-secondary-500 transition-colors'>
								Blog
							</a>
						</li>
						<li className='pl-1 pt-3 pr-0 pb-0 md:p-2 ml-auto'>
							<a href='#top' className='inline-flex items-center'>
								<span className='lg:hidden'>Top</span>
								<span className='hidden lg:inline'>
									Back Up Top
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
