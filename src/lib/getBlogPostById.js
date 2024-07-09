import fs from 'fs/promises'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { convertToISOString } from '@/components/utils/utils'

export const getBlogPostById = async id => {
	try {
		const filePath = path.join(process.cwd(), 'data', 'blog-posts.json')
		const fileContents = await fs.readFile(filePath, 'utf8')
		const blogPosts = JSON.parse(fileContents)

		const post = blogPosts.find(
			post => post.id.toString() === id.toString()
		)

		if (!post) {
			return null
		}

		console.log('post', post)

		// Convert the publishDate to ISO string format
		const isoPublishDate = convertToISOString(post.publishDate)

		// Serialize the MDX content
		const mdxSource = await serialize(post.content)

		// Calculate reading time
		const wordCount = post.content.split(/\s+/).length
		const readingTime = Math.ceil(wordCount / 200)

		// Handle the publishDate
		let formattedDate
		try {
			// Attempt to create a Date object and format it
			const dateObj = new Date(post.publishDate)
			if (isNaN(dateObj.getTime())) {
				throw new Error('Invalid date')
			}
			formattedDate = dateObj.toISOString()
		} catch (error) {
			console.warn(`Invalid date for post ${id}:`, post.publishDate)
			formattedDate = null // or use a default date like new Date().toISOString()
		}

		// Return the post with serialized MDX content and additional computed properties
		return {
			...post,
			content: mdxSource,
			readingTime,
			publishDate: isoPublishDate
		}
	} catch (error) {
		console.error('Error fetching blog post:', error)
		return null
	}
}
