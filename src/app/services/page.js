import MainContainer from '@/components/containers/MainContainer'
import TopicContainer from '@/components/containers/TopicContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import React from 'react'

const Services = () => {
	return (
		<Layout>
			<header className='responsive-container py-8'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
					Services
				</h1>
			</header>
			<MainContainer>
				<TopicContainer dataSet='services' />
			</MainContainer>
		</Layout>
	)
}

export default Services
