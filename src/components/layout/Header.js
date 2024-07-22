import React from 'react'
import BlogPostCard from '../ui/BlogPostCard'
import AboveTheFold from './AboveTheFold'
import { getHeaderData } from '@/lib/pageData'

const Header = async ({
	isBlogPage = false,
	specificId,
	heroData,
	featureArticle
}) => {
	try {
		const headerData = await getHeaderData()

		if (!heroData && !featureArticle) {
			throw new Error('Specific page data not found')
		}

		return (
			<header className='responsive-container bg-neutral py-8 min-h-[calc(100vh-64px)] flex flex-col justify-between'>
				{isBlogPage ? (
					<div>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
							Blog
						</h1>

						{featureArticle && (
							<BlogPostCard post={featureArticle} />
						)}
					</div>
				) : (
					<AboveTheFold isHomepage={true} obj={heroData} />
				)}
			</header>
		)
	} catch (error) {
		console.error('Error in Header component:', error)
		return <header>Error loading header content</header>
	}
}

export default Header
