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

		// Convert the publishDate to ISO string format
		const isoPublishDate = convertToISOString(post.publishDate)

		// Serialize the MDX content
		let mdxSource
		if (typeof post.content === 'string') {
			mdxSource = await serialize(post.content)
		} else if (Array.isArray(post.content)) {
			// If content is an array, we'll serialize each section separately
			mdxSource = await Promise.all(
				post.content.map(async section => ({
					...section,
					content: section.content
						? await serialize(section.content)
						: null
				}))
			)
		} else {
			throw new Error('Unsupported content format')
		}

		// Handle the publishDate
		let formattedDate
		try {
			const dateObj = new Date(post.publishDate)
			if (isNaN(dateObj.getTime())) {
				throw new Error('Invalid date')
			}
			formattedDate = dateObj.toISOString()
		} catch (error) {
			console.warn(`Invalid date for post ${id}:`, post.publishDate)
			formattedDate = null
		}

		// Return the post with serialized MDX content and additional computed properties
		return {
			...post,
			content: mdxSource,
			publishDate: isoPublishDate
		}
	} catch (error) {
		console.error('Error fetching blog post:', error)
		return null
	}
}
