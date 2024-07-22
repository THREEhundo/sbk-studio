import { getData } from './getData'
import { notFound } from 'next/navigation'

export async function getHeaderData() {
	try {
		const [homepageData, blogPostsData] = await Promise.all([
			getData('seo'),
			getData('blog-posts')
		])
		return {
			hero: homepageData,
			blogs: blogPostsData
		}
	} catch (error) {
		console.error('Error fetching homepage data:', error)
		notFound()
	}
}

export async function getPageData() {
	try {
		return await getData('seo')
	} catch (error) {
		console.error('Error fetching about page data:', error)
		notFound()
	}
}

export async function getPortfolioData() {
	try {
		return await getData('projects')
	} catch (error) {
		console.error('Error fetching about portfolio data:', error)
		notFound()
	}
}

export async function getPageMetaData(pageTitle) {
	const seoData = await getData('seo')

	const data = seoData.find(item => item.pageTitle === pageTitle)

	// Assuming seoData is an object with pageTitle as keys
	if (data[pageTitle]) {
		console.log(data[pageTitle])
		return data[pageTitle]
	}

	console.warn(`No data found for page title: ${pageTitle}`)
	return {
		pageTitle: 'SBK Studio | Web Design for Small Businesses',
		metaDescription:
			'Custom web design and development services tailored for small businesses.'
	}
}
