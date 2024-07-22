import BlogPostContainer from '@/components/containers/BlogPostContainer'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import { getHeaderData } from '@/lib/pageData'
import React from 'react'

const Blog = async () => {
	const headerData = await getHeaderData()

	// Find the specific article data
	const featureArticle = headerData.blogs.find(item => item.feature)
	return (
		<Layout>
			<Header featureArticle={featureArticle} isBlogPage={true} />
			<BlogPostContainer dataSet={headerData.blogs} />
		</Layout>
	)
}

export default Blog
