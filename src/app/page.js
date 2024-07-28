import { Suspense } from 'react'
import Layout from '@/components/Layout'
import UseScrollHandler from '@/components/utils/useScrollHandler'
import Header from '@/components/layout/Header'
import CardSection from '@/components/ui/CardSection'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/app/metadata'
import { getPageData, getPortfolioData } from '@/lib/pageData'
import PortfolioListContainer from '@/components/containers/PortfolioListContainer'

const HOME_PAGE_TITLE =
	'SBK STUDIO | Small Business Web Design & Development | Affordable Custom Websites'

async function getHomeData() {
	const pageData = await getPageData()

	if (!Array.isArray(pageData)) {
		console.error('Page data is not an array:', pageData)
		return null
	}

	// Try to find an exact match first
	let homeObj = pageData.find(item => item.pageTitle === HOME_PAGE_TITLE)

	// If no exact match, try a case-insensitive partial match
	if (!homeObj) {
		homeObj = pageData.find(
			item =>
				item.pageTitle &&
				item.pageTitle
					.toLowerCase()
					.includes('small business web design')
		)
	}

	if (!homeObj) {
		console.error(
			'Home object not found. Available titles:',
			pageData.map(item => item.pageTitle)
		)
		return null
	}

	return homeObj
}

async function getPortfolio() {
	const portfolioData = await getPortfolioData()

	if (!Array.isArray(portfolioData)) {
		console.error(`Portfolio data is not an array:`, portfolioData)
		return null
	}

	return portfolioData
}

export async function generateMetadata() {
	const homeObj = await getHomeData()
	if (!homeObj) return {}

	const seoMetadata = generateSEOMetadata(
		homeObj.pageTitle,
		homeObj.metaDescription
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

async function HomeContent() {
	const homeObj = await getHomeData()
	const portfolioData = await getPortfolio()
	if (!homeObj) {
		notFound()
	}

	return (
		<>
			<Header specificId={HOME_PAGE_TITLE} heroData={homeObj} />
			<PortfolioListContainer portfolioData={portfolioData} />
			{homeObj.sections.map((section, index) => (
				<CardSection
					key={index}
					title={section.h2}
					description={section.content}
					cards={section.h3s || []}
					imgUrl={section.image}
					imageAlt={section.imageAlt}
					imageType={section.type}
				/>
			))}
		</>
	)
}

export default function Home() {
	return (
		<Layout>
			<UseScrollHandler />
			<Suspense fallback={<div>Loading...</div>}>
				<HomeContent />
			</Suspense>
		</Layout>
	)
}
