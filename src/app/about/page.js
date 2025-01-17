import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import FeaturesContainerLG from '@/components/containers/FeaturesContainerLG'
import ButtonWrapper from '@/components/containers/ButtonWrapper'
import Image from 'next/image'
import { getPageData } from '@/lib/pageData'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '../metadata'
import CardSection from '@/components/ui/CardSection'
import IconCardSection from '@/components/ui/IconCardSection'
import PageLayout from '@/components/layout/PageLayout'

const ABOUT_PAGE_TITLE =
	'SBK STUDIO | About Us | Small Business Web Design & Development'
async function getServicesData() {
	const pageData = await getPageData()

	if (!Array.isArray(pageData)) {
		console.error('Page data is not an array:', pageData)
		return null
	}

	// Try to find an exact match first
	let aboutObj = pageData.find(item => item.pageTitle === ABOUT_PAGE_TITLE)

	// If no exact match, try a case-insensitive partial match
	if (!aboutObj) {
		aboutObj = pageData.find(
			item =>
				item.pageTitle &&
				item.pageTitle
					.toLowerCase()
					.includes('small business web design')
		)
	}

	if (!aboutObj) {
		console.error(
			'Home object not found. Available titles:',
			pageData.map(item => item.pageTitle)
		)
		return null
	}

	return aboutObj
}

export async function generateMetadata() {
	const aboutObj = await getServicesData()
	if (!aboutObj) return {}

	const seoMetadata = generateSEOMetadata(
		aboutObj.pageTitle,
		aboutObj.metaDescription
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

const About = async () => {
	const aboutObj = await getServicesData()

	if (!aboutObj) {
		notFound()
	}

	return (
		<PageLayout
			headerProps={{
				specificId: ABOUT_PAGE_TITLE,
				heroData: aboutObj
			}}
			title='About Us'>
			{aboutObj.sections.map((section, index) => (
				<CardSection
					key={index}
					title={section.h2}
					description={section.content}
					cards={section.h3s || []}
					imgUrl={section.image}
					imageAlt={section.imageAlt}
					imageType={section.type}
					footerContent={section.content}
					content2={section.content2}
					specificId={ABOUT_PAGE_TITLE}
				/>
			))}
		</PageLayout>
	)
}

export default About
