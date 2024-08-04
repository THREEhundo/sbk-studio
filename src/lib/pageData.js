import { getData } from './getData'
import { notFound } from 'next/navigation'

export async function getHeaderData() {
	try {
		const data = await getData('seo')

		// Find the home object or use the first object if home is not found
		const homeObject = data.find(item => item.id === 'home') || data[0]

		if (!homeObject) {
			console.warn('No suitable SEO data found. Using fallback.')
			return {
				pageTitle: 'Default Page Title',
				metaDescription: 'Default meta description',
				h1: 'Default H1',
				image: '/default-image.jpg',
				imageAlt: 'Default image alt text',
				sections: [],
				cta: {
					heading: 'Default CTA Heading',
					buttonText: 'Click Here'
				}
			}
		}

		return homeObject
	} catch (error) {
		console.error('Error in getHeaderData:', error)
		return null
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
		return data[pageTitle]
	}

	console.warn(`No data found for page title: ${pageTitle}`)
	return {
		pageTitle: 'SBK Studio | Web Design for Small Businesses',
		metaDescription:
			'Custom web design and development services tailored for small businesses.'
	}
}
