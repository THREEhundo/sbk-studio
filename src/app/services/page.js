import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import TopicContainer from '@/components/containers/TopicContainer'
import Section from '@/components/layout/Section'
import ButtonWrapper from '@/components/containers/ButtonWrapper'
import HoverRevealComponent from '@/components/containers/HoverRevealComponent '
import { getPageData } from '@/lib/pageData'
import { notFound } from 'next/navigation'

const Services = async () => {
	// Fetch services data
	const data = await getPageData()
	const specificID = 'Web Design & Development Services for Small Businesses'

	const servicesObj = data.find(
		item =>
			item.pageTitle ===
			'Web Design & Development Services for Small Businesses'
	)

	if (!servicesObj) {
		notFound()
	}
	console.log(servicesObj.sections.title)
	return (
		<Layout>
			<Header heroData={servicesObj} specificId={specificID} />

			<main className='bg-neutral responsive-container'>
				{/* Services Overview Section */}
				<Section title='Our Services' className='text-center'>
					{/* Services introduction */}
					<p className='text-xl text-primary-100 max-w-3xl mx-auto mb-12'>
						At SBK Studio, we offer a comprehensive suite of web
						development and design services tailored to elevate your
						online presence and drive your business forward.
					</p>

					{/* Service highlights grid */}
					<div className='grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-8 mb-12'>
						{servicesObj.sections.map((service, index) => (
							<HoverRevealComponent
								key={service.id}
								title={service.h2}
								description={service.content}
								button
							/>
						))}
					</div>

					{/* CTA button */}
					<ButtonWrapper variant='secondary' size='large'>
						Explore All Services
					</ButtonWrapper>
				</Section>

				{/* Detailed services information */}
				<TopicContainer dataSet={servicesObj.sections} />

				{/* Call-to-action Section */}
				<Section
					title='Ready to Elevate Your Online Presence?'
					className='text-center bg-neutral-800'>
					<p className='text-xl text-primary-100 mb-8'>
						Let&apos;s discuss how our services can be tailored to
						meet your unique business needs and goals.
					</p>
					<ButtonWrapper
						href='/contact'
						variant='primary'
						size='large'>
						Get in Touch
					</ButtonWrapper>
				</Section>
			</main>
		</Layout>
	)
}

export default Services
