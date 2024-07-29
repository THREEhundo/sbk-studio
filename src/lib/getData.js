import fs from 'fs/promises'
import path from 'path'
import createBlogPost from './createBlogPost'

export async function getData(fileName) {
	try {
		const dataDir = path.join(process.cwd(), 'data')
		const filePath = path.join(dataDir, `${fileName}.json`)
		console.log(`Attempting to read file: ${filePath}`)
		console.log(`Current working directory: ${process.cwd()}`)
		console.log(
			`Data directory exists: ${await fs
				.access(dataDir)
				.then(() => true)
				.catch(() => false)}`
		)

		const fileContents = await fs.readFile(filePath, 'utf8')
		const data = JSON.parse(fileContents)
		console.log(`Successfully parsed ${fileName} data:`, data)
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
		console.log(`Reading file: ${filePath}`)
		const fileContents = await fs.readFile(filePath, 'utf8')
		const rawPosts = JSON.parse(fileContents)
		console.log(`Parsed ${rawPosts.length} raw blog posts`)

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

		console.log(`Processed ${processedPosts.length} blog posts`)
		return processedPosts
	} catch (error) {
		console.error(`Error processing ${dataSet}.json:`, error)
		return []
	}
}
