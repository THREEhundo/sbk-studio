import React from 'react'
import { Nav } from './ui/Nav'
import Footer from './ui/Footer'

const Layout = ({ children }) => {
	return (
		<div className='container mx-auto px-4'>
			<Nav />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
