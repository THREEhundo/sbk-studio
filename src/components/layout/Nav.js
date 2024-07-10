'use client'
import React, { useEffect, useState } from 'react'
import Placeholder from '../ui/Placeholder'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Nav = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<nav>
			<div>
				<div>
					<Link href='/'>
						<Placeholder width={100} height={40} type='icon' />
					</Link>

					{isMobile ? (
						<button
							onClick={toggleMenu}
							aria-expanded={isOpen}
							aria-label='Toggle menu'>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								{isOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					) : (
						<ul>
							<NavItems pathname={pathname} />
						</ul>
					)}
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state */}
			{isMobile && isOpen && (
				<div>
					<ul>
						<NavItems pathname={pathname} mobile />
					</ul>
				</div>
			)}
		</nav>
	)
}

const NavItems = ({ pathname, mobile }) => {
	return (
		<>
			<li>
				<Link href='/about'>About</Link>
			</li>
			<li>
				<Link
					href={
						pathname === '/'
							? '?section=portfolio'
							: '/?section=portfolio'
					}>
					Portfolio
				</Link>
			</li>
			<li>
				<Link href='/services'>Services</Link>
			</li>
			<li>
				<Link href='/blog'>Blog</Link>
			</li>
			<li>
				<Link href='/contact'>Contact</Link>
			</li>
		</>
	)
}
