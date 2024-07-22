import React from 'react'
import createBlogPost from '@/lib/createBlogPost'
import BlogPostCard from '../ui/BlogPostCard'
import { getPageData } from '@/lib/pageData'

const BlogPostContainer = async ({ dataSet }) => {
	const blogPosts = getBlogPosts(dataSet)

	return (
		<section className='responsive-container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{blogPosts.map(
				(post, i) =>
					i !== 0 && <BlogPostCard key={post.id} post={post} />
			)}
		</section>
	)
}

export const getBlogPosts = dataSet =>
	dataSet.map(item =>
		createBlogPost(
			item.id,
			item.title,
			item.content,
			item.author,
			item.publishDate,
			item.tags,
			item.authorImageUrl,
			item.image,
			item.altTag
		)
	)

export default BlogPostContainer
