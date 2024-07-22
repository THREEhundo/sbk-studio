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
