import { getData } from '@/lib/getData'
import { formatDate } from '@/components/utils/utils'
import React from 'react'
import Placeholder from '../ui/Placeholder'
import ButtonWrapper from '../containers/ButtonWrapper'
import BlogPostCard from '../ui/BlogPostCard'

const Header = async ({ dataSet, isHomepage = false, isBlogPage = false }) => {
	const file = `${dataSet}.json`
	const data = await getData(file)

	if (!data || data.length === 0) {
		return <header>No data available</header>
	}

	const firstObject = data[0]

	const featureArticle = data.find(article => article.feature)

	if (featureArticle && featureArticle.publishDate) {
		featureArticle.publishDate = formatDate(featureArticle.publishDate)
	}
	console.log(featureArticle.publishDate)

	const excerpt = content => {
		const stripHtml = html =>
			typeof html === 'string' ? html.replace(/<[^>]+>/g, '') : ''
		const plainText = stripHtml(content)
		return plainText.length > 150
			? plainText.substring(0, 150) + '...'
			: plainText
	}

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
				<div className='mx-auto'>
					<Placeholder
						width={320}
						height={240}
						type='image'
						className='pb-4'
					/>
					<div className='w-full md:w-2/3 mb-4'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
							{firstObject.title}
						</h1>
						<p className='text-primary-100 pb-6'>
							{firstObject.description}
						</p>
						{isHomepage && (
							<ButtonWrapper variant='primary' size='large'>
								Learn More
							</ButtonWrapper>
						)}
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
