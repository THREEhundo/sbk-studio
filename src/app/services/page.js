import MainContainer from '@/components/containers/MainContainer'
import TopicContainer from '@/components/containers/TopicContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import React from 'react'

const Services = () => {
	return (
		<Layout>
			<header>
				<h1>Services</h1>
			</header>
			<MainContainer>
				<TopicContainer dataSet='services' />
			</MainContainer>
		</Layout>
	)
}

export default Services
