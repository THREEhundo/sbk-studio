'use client'
import React, { useEffect, useState } from 'react'
import Placeholder from '../ui/Placeholder'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ButtonWrapper from '../containers/ButtonWrapper'

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
		<nav className='relative z-50'>
			<div className='responsive-container mx-auto px-4 py-4 flex justify-between items-center'>
				<Link href='/'>
					<h4>SBK STUDIO</h4>
				</Link>

				{isMobile ? (
					<button
						onClick={toggleMenu}
						aria-expanded={isOpen}
						aria-label='Toggle menu'
						className='z-50 relative'>
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
					<ul className='flex space-x-4'>
						<NavItems pathname={pathname} />
						<ContactLink />
					</ul>
				)}
			</div>

			{/* Mobile menu */}
			{isMobile && (
				<div
					className={`fixed inset-0 bg-neutral transition-opacity duration-300 ${
						isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}>
					<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
						<Link href='/'>
							<h4>SBK STUDIO</h4>
						</Link>
						<button
							onClick={toggleMenu}
							aria-label='Close menu'
							className='z-50 relative'>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='flex flex-col justify-between h-full'>
						<div className='flex-1 flex items-center justify-center'>
							<ul className='text-center'>
								<NavItems
									pathname={pathname}
									mobile
									toggleMenu={toggleMenu}
								/>
							</ul>
						</div>
						<div className='text-center pb-20'>
							<ContactLink mobile toggleMenu={toggleMenu} />
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

const NavItems = ({ pathname, mobile, toggleMenu }) => {
	const linkClass = `block py-2 ${
		mobile ? 'text-2xl mb-4' : ''
	} text-primary-100 hover:text-secondary-500 transition-colors duration-200`

	const linkContactClass = `block py-2 ${
		mobile ? 'hidden' : ''
	} text-primary-100 hover:text-secondary-500 transition-colors duration-200`
	return (
		<>
			<li>
				<Link
					href='/about'
					className={linkClass}
					onClick={mobile ? toggleMenu : undefined}>
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
					className={linkClass}
					onClick={mobile ? toggleMenu : undefined}>
					Portfolio
				</Link>
			</li>
			<li>
				<Link
					href='/services'
					className={linkClass}
					onClick={mobile ? toggleMenu : undefined}>
					Services
				</Link>
			</li>
			<li>
				<Link
					href='/blog'
					className={linkClass}
					onClick={mobile ? toggleMenu : undefined}>
					Blog
				</Link>
			</li>
			<li>
				<Link
					href='/contact'
					className={linkContactClass}
					onClick={mobile ? toggleMenu : undefined}>
					Contact
				</Link>
			</li>
		</>
	)
}

const ContactLink = ({ mobile, toggleMenu }) => {
	const linkClass = `block py-2 ${
		mobile ? 'text-2xl' : 'hidden'
	} text-primary-100 hover:text-secondary-500 transition-colors duration-200`

	return (
		<Link
			href='/contact'
			className={linkClass}
			onClick={mobile ? toggleMenu : ''}>
			<ButtonWrapper
				className=' bg-secondary-500 text-neutral rounded-lg'
				size='doubleXl'>
				Contact
			</ButtonWrapper>
		</Link>
	)
}
