import createBlogPost from '@/lib/createBlogPost'
import { getData } from '@/lib/getData'
import React from 'react'
import BlogPostCard from '../ui/BlogPostCard'

const BlogPostContainer = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)
	const blogPosts = data.map(post =>
		createBlogPost(
			post.id,
			post.title,
			post.content,
			post.author,
			post.publishDate,
			post.tags,
			post.image,
			post.feature
		)
	)

	return (
		<section className='responsive-container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{blogPosts.map(
				(post, i) =>
					i !== 0 && <BlogPostCard key={post.id} post={post} />
			)}
		</section>
	)
}

export default BlogPostContainer
