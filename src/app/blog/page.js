import BlogPostContainer from '@/components/containers/BlogPostContainer'
import Layout from '@/components/Layout'
import React from 'react'

const Blog = () => {
	return (
		<Layout>
			<BlogPostContainer dataSet='blog-posts' />
		</Layout>
	)
}

export default Blog
