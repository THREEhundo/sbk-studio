'use client'
import React from 'react'
import Placeholder from '../ui/Placeholder'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Nav = () => {
	const pathname = usePathname()
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>
						<Placeholder width={100} height={40} type='icon' />
					</Link>
				</li>
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
			</ul>
		</nav>
	)
}
