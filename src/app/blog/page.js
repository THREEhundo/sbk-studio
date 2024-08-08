import BlogPostContainer from '@/components/containers/BlogPostContainer'
import PageLayout from '@/components/layout/PageLayout'
import { getHeaderData } from '@/lib/pageData'
import { getData } from '@/lib/getData'
import React from 'react'

const Blog = async () => {
	try {
		const headerData = await getHeaderData()
		const blogPosts = await getData('blog-posts')

		return (
			<PageLayout
				headerProps={{
					featureArticle: blogPosts[0] || {},
					isBlogPage: true
				}}
				title='Our Blog'>
				<BlogPostContainer dataSet={blogPosts || []} />
			</PageLayout>
		)
	} catch (error) {
		console.error('Error in Blog component:', error)
		return <div>Error loading blog content. Please try again later.</div>
	}
}

export default Blog
