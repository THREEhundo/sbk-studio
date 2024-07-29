import BlogPostContainer from '@/components/containers/BlogPostContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import { getHeaderData } from '@/lib/pageData'
import { getData } from '@/lib/getData'
import React from 'react'

const Blog = async () => {
	try {
		const headerData = await getHeaderData()
		console.log('Header data:', headerData)

		const blogPosts = await getData('blog-posts')
		console.log('Blog posts data:', blogPosts)

		return (
			<Layout>
				<Header featureArticle={blogPosts[0] || {}} isBlogPage={true} />
				<BlogPostContainer dataSet={blogPosts || []} />
			</Layout>
		)
	} catch (error) {
		console.error('Error in Blog component:', error)
		return <div>Error loading blog content. Please try again later.</div>
	}
}

export default Blog
