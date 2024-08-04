import fs from 'fs/promises'
import path from 'path'
import createBlogPost from './createBlogPost'

export async function getData(fileName) {
	try {
		const dataDir = path.join(process.cwd(), 'data')
		const filePath = path.join(dataDir, `${fileName}.json`)

		const fileContents = await fs.readFile(filePath, 'utf8')
		const data = JSON.parse(fileContents)
		return data
	} catch (error) {
		console.error(`Error reading ${fileName}.json:`, error)
		console.error(`Stack trace: ${error.stack}`)
		if (error.code === 'ENOENT') {
			console.warn(
				`File ${fileName}.json not found. Using fallback data.`
			)
			return getFallbackData(fileName)
		}
		throw error
	}
}

function getFallbackData(fileName) {
	// Provide fallback data for different file types
	switch (fileName) {
		case 'seo':
			return [
				{
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
			]
		case 'blog-posts':
		case 'projects':
			return []
		default:
			return []
	}
}
export async function getBlogPosts(dataSet) {
	try {
		const filePath = path.join(process.cwd(), 'data', `${dataSet}.json`)
		const fileContents = await fs.readFile(filePath, 'utf8')
		const rawPosts = JSON.parse(fileContents)

		const processedPosts = rawPosts.map(post =>
			createBlogPost(
				post.id,
				post.title,
				post.content,
				post.author,
				post.publishDate,
				post.tags,
				post.authorImageUrl,
				post.image,
				post.altTag
			)
		)

		return processedPosts
	} catch (error) {
		console.error(`Error processing ${dataSet}.json:`, error)
		return []
	}
}
