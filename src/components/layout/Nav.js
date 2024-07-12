'use client'
import React, { useState, useEffect } from 'react'
import Placeholder from '../ui/Placeholder'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Nav = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	useEffect(() => {
		const closeMenu = () => setIsOpen(false)
		window.addEventListener('resize', closeMenu)
		return () => window.removeEventListener('resize', closeMenu)
	}, [])

	const NavItems = () => (
		<>
			<li>
				<Link
					href='/about'
					className='block py-2 px-4 hover:text-secondary-500 transition-colors'>
					About
				</Link>
			</li>
			<li>
				<Link
					href={
						pathname === '/'
							? '?section=portfolio'
							: '/?section=portfolio'
					}
					className='block py-2 px-4 hover:text-secondary-500 transition-colors'>
					Portfolio
				</Link>
			</li>
			<li>
				<Link
					href='/services'
					className='block py-2 px-4 hover:text-secondary-500 transition-colors'>
					Services
				</Link>
			</li>
			<li>
				<Link
					href='/blog'
					className='block py-2 px-4 hover:text-secondary-500 transition-colors'>
					Blog
				</Link>
			</li>
			<li>
				<Link
					href='/contact'
					className='block py-2 px-4 hover:text-secondary-500 transition-colors'>
					Contact
				</Link>
			</li>
		</>
	)

	return (
		<nav
			id='top'
			className='responsive-container px-4 bg-neutral shadow-md h-16'>
			<div className='mx-auto'>
				<div className='flex justify-between items-center py-4'>
					<Link href='/' className='flex items-center'>
						<Placeholder width={100} height={40} type='icon' />
					</Link>

					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='text-neutral hover:text-secondary-500 focus:outline-none focus:text-secondary-500'
							aria-expanded={isOpen}
							aria-label='Toggle menu'>
							<svg
								className='h-6 w-6 fill-neutral'
								viewBox='0 0 24 24'>
								{isOpen ? (
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
									/>
								) : (
									<path
										fillRule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
									/>
								)}
							</svg>
						</button>
					</div>

					<ul className='hidden md:flex space-x-4'>
						<NavItems />
					</ul>
				</div>

				{isOpen && (
					<ul className='md:hidden pb-4'>
						<NavItems />
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Nav
