'use client'
import React, { useEffect, useRef, useState } from 'react'
import AboveTheFold from './AboveTheFold'
import BlogPostCard from '../ui/BlogPostCard'

const Header = ({ isBlogPage = false, heroData, featureArticle }) => {
	console.log('Feature Article in Header:', featureArticle)
	const [maxHeight, setMaxHeight] = useState('auto')
	const headerRef = useRef(null)
	const h1Ref = useRef(null)

	useEffect(() => {
		const updateCardHeight = () => {
			if (headerRef.current && h1Ref.current) {
				const viewportHeight = window.innerHeight
				const viewportWidth = widnow.innerWidth
				const navHeight = viewportWidth < 768 ? 72 : 88 // Based on your calc(100vh-88px)
				const h1Height = h1Ref.current.offsetHeight
				const remainingHeaderHeight = viewportHeight - navHeight
				const remainingImageHeight = remainingHeaderHeight - h1Height
				setMaxHeight(`${remainingImageHeight - 181}px`)
			}
		}
		updateCardHeight()
		window.addEventListener('resize', updateCardHeight)

		return () => window.removeEventListener('resize', updateCardHeight)
	}, [maxHeight])

	console.log('BlogList received posts:', featureArticle)

	const containerStyles = `h-[calc(100vh-88px)] pb-12`
	const featureStyles = `max-h-[${maxHeight}] flex flex-col`

	return (
		<header
			ref={headerRef}
			className={`responsive-container bg-neutral ${
				!isBlogPage ? containerStyles : featureStyles
			}`}>
			{isBlogPage ? (
				<>
					<h1
						ref={h1Ref}
						className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
						Blog
					</h1>
					<div className=''>
						{featureArticle && (
							<BlogPostCard
								post={featureArticle}
								className='h-full'
								maxHeight={maxHeight}
							/>
						)}
					</div>
				</>
			) : (
				<AboveTheFold isHomepage={true} obj={heroData} />
			)}
		</header>
	)
}

export default Header
