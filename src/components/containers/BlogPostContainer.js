import createBlogPost from '@/lib/createBlogPost'
import { getData } from '@/lib/getData'
import React from 'react'
import BlogPostCard from '../ui/BlogPostCard'

const BlogPostContainer = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)
	console.log(getBlogPost(data))
	return (
		<section>
			{getBlogPost(data).map(post => (
				<BlogPostCard key={post.id} post={post} />
			))}
		</section>
	)
}

const getBlogPost = dataSet => {
	return dataSet.map(dataSet =>
		createBlogPost(
			dataSet.id,
			dataSet.title,
			dataSet.content,
			dataSet.author,
			dataSet.date,
			dataSet.tag
		)
	)
}
export default BlogPostContainer
