import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import TopicContainer from '@/components/containers/TopicContainer'
import Section from '@/components/layout/Section'
import ButtonWrapper from '@/components/containers/ButtonWrapper'
import HoverRevealComponent from '@/components/containers/HoverRevealComponent '
import { getPageData } from '@/lib/pageData'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '../metadata'
import CardSection from '@/components/ui/CardSection'
import MainContainer from '@/components/containers/MainContainer'

const SERVICES_PAGE_TITLE =
	'SBK STUDIO | Web Design & Development Services for Small Businesses'
async function getServicesData() {
	const pageData = await getPageData()

	if (!Array.isArray(pageData)) {
		console.error('Page data is not an array:', pageData)
		return null
	}

	// Try to find an exact match first
	let servicesObj = pageData.find(
		item => item.pageTitle === SERVICES_PAGE_TITLE
	)

	// If no exact match, try a case-insensitive partial match
	if (!servicesObj) {
		servicesObj = pageData.find(
			item =>
				item.pageTitle &&
				item.pageTitle
					.toLowerCase()
					.includes('small business web design')
		)
	}

	if (!servicesObj) {
		console.error(
			'Home object not found. Available titles:',
			pageData.map(item => item.pageTitle)
		)
		return null
	}

	return servicesObj
}

export async function generateMetadata() {
	const servicesObj = await getServicesData()
	if (!servicesObj) return {}

	const seoMetadata = generateSEOMetadata(
		servicesObj.pageTitle,
		servicesObj.metaDescription
	)
	return {
		...seoMetadata,
		openGraph: {
			...seoMetadata.openGraph,
			url: 'https://yourdomain.com/',
			type: 'website'
		}
	}
}

const Services = async () => {
	// Fetch services data
	const servicesObj = await getServicesData()
	const specificID = servicesObj.pageTitle

	if (!servicesObj) {
		notFound()
	}

	const h3sObj = [servicesObj.sections.find(service => service.h3s)]

	console.log(`SHOW ME WHAT YOU GOT`, h3sObj)

	return (
		<Layout>
			<Header heroData={servicesObj} specificId={specificID} />

			<MainContainer>
				<TopicContainer dataSet={h3sObj} />
				<div className='grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-8 mb-12'>
					{servicesObj.sections.map(
						section =>
							!section.h3s && (
								<HoverRevealComponent
									key={section.id}
									title={section.h2}
									content={section.content}
									content2={section.content2}
								/>
							)
					)}
				</div>

				{/*Detailed services information
				<TopicContainer dataSet={servicesObj.sections} />

				{/* Call-to-action Section */}
				{/*<Section
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
				</Section>*/}
			</MainContainer>
		</Layout>
	)
}

export default Services
