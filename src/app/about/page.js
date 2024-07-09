import FeaturesContainerLG from '@/components/containers/FeaturesContainerLG'
import MainContainer from '@/components/containers/MainContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import React from 'react'

const About = () => {
	return (
		<Layout>
			<Header dataSet='about' />
			<MainContainer>
				<section>
					<h4>What we do best</h4>
					<h2>Elevate Your Online Presence, Amplify Your Success</h2>
					<FeaturesContainerLG dataSet='about' />
				</section>
			</MainContainer>
		</Layout>
	)
}

export default About
