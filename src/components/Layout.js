import React from 'react'
import { Nav } from './layout/Nav'
import Footer from './layout/Footer'

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
