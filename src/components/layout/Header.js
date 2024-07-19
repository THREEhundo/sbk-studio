import { getData } from '@/lib/getData'
import { formatDate } from '@/components/utils/utils'
import React from 'react'
import ButtonWrapper from '../containers/ButtonWrapper'
import BlogPostCard from '../ui/BlogPostCard'
import createBlogPost from '@/lib/createBlogPost'
import { getBlogPosts } from '../containers/BlogPostContainer'
import Image from 'next/image'
import AboveTheFold from './AboveTheFold'

const Header = async ({ dataSet, isBlogPage = false, specificId }) => {
	const file = `${dataSet}.json`
	const data = await getData(file)
	const file1 = `seo.json`
	const data1 = await getData(file1)

	if (!data || data.length === 0) {
		return <header>No data available</header>
	}
	const firstObject = data[0]

	const featureArticle = data.find(article => article.feature === true)

	const specificObject = data1.find(item => item.pageTitle === specificId)
	console.log('specific object', specificObject)
	console.log(data1)

	return (
		<header className='responsive-container bg-neutral py-8 min-h-[calc(100vh-64px)] flex flex-col justify-between'>
			{isBlogPage ? (
				<div>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
						Blog
					</h1>

					{featureArticle && <BlogPostCard post={featureArticle} />}
				</div>
			) : (
				<AboveTheFold isHomepage={true} obj={specificObject} />
			)}
		</header>
	)
}

export default Header
