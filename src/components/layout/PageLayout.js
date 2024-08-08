import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'

const PageLayout = ({ children, headerProps, title }) => {
	return (
		<Layout>
			<Header {...headerProps} />
			<main className='responsive-container'>
				{title && <h1 className='text-3xl font-bold mb-6'>{title}</h1>}
				{children}
			</main>
		</Layout>
	)
}

export default PageLayout
