import BlogPostContainer from '@/components/containers/BlogPostContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import React from 'react'

const Blog = () => {
	return (
		<Layout>
			<Header dataSet={'blog-posts'} isBlogPage={true} />
			<BlogPostContainer dataSet='blog-posts' />
		</Layout>
	)
}

export default Blog
