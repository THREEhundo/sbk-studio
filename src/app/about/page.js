import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import FeaturesContainerLG from '@/components/containers/FeaturesContainerLG'
import ButtonWrapper from '@/components/containers/ButtonWrapper'
import Image from 'next/image'
import { getPageData } from '@/lib/pageData'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '../metadata'

const ABOUT_PAGE_TITLE =
	'SBK STUDIO | About Us | Small Business Web Design & Development'
async function getServicesData() {
	const pageData = await getPageData()
	//console.log('Fetched page data:', JSON.stringify(pageData, null, 2)) // Log the entire pageData

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
	const data = await getPageData()
	const aboutId = 'About Us | Small Business Web Design & Development'
	const aboutObj = data.find(
		item =>
			item.pageTitle ===
			'SBK STUDIO | About Us | Small Business Web Design & Development'
	)

	if (!aboutObj) {
		notFound()
	}

	return (
		<Layout>
			<Header specificId={aboutId} heroData={aboutObj} />

			<main className='responsive-container px-4 py-8 space-y-16'>
				{/* Hero Section */}
				<section className='text-center'>
					<h1 className='text-4xl font-bold text-primary-500 mb-4'>
						About SBK Studio
					</h1>
					<p className='text-xl text-primary-100 max-w-2xl mx-auto'>
						We craft digital excellence for LA&apos;s small
						businesses, combining passion for clean code with
						stunning design.
					</p>
				</section>

				{/* Our Mission Section */}
				<section className='flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/2'>
						<h2 className='text-3xl font-bold text-primary-500 mb-4'>
							Our Mission
						</h2>
						<p className='text-lg text-primary-100'>
							At SBK Studio, we&apos;re dedicated to elevating
							small businesses in Los Angeles through custom-coded
							websites that outperform template-based solutions.
						</p>
					</div>
					<div className='md:w-1/2'>
						<Image
							src='/images/og/p2.png'
							alt='SBK Studio mission visualization'
							width={500}
							height={300}
							className='rounded-lg'
						/>
					</div>
				</section>

				{/* What We Do Best Section */}
				<section>
					<h2 className='text-3xl font-bold text-primary-500 mb-4 text-center'>
						What We Do Best
					</h2>
					<p className='text-xl text-primary-100 mb-8 text-center'>
						Elevate Your Online Presence, Amplify Your Success
					</p>
					<FeaturesContainerLG dataSet={aboutObj} />
				</section>

				{/* Call to Action Section */}
				<section className='text-center bg-neutral-800 p-8 rounded-lg'>
					<h2 className='text-3xl font-bold text-primary-500 mb-4'>
						Ready to Elevate Your Online Presence?
					</h2>
					<p className='text-xl text-primary-100 mb-6'>
						Let&apos;s discuss how we can craft a digital solution
						tailored to your business needs.
					</p>
					<ButtonWrapper
						href='/contact'
						variant='gradient'
						size='large'>
						Contact Us
					</ButtonWrapper>
				</section>
			</main>
		</Layout>
	)
}

export default About
