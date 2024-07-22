'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { formatDate } from '@/components/utils/utils'
import MDXContent from './MDXContent'
import AuthorAvatar from './ui/AuthorAvatar'
import styles from '../app/styles/ArticleProgressBar.module.css'
import stickyStyles from '../app/styles/StickyHeader.module.css'

const Article = ({ post }) => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const articleRef = useRef(null)
	const headerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (articleRef.current && headerRef.current) {
				const articleHeight = articleRef.current.clientHeight
				const headerHeight = headerRef.current.clientHeight
				const windowHeight = window.innerHeight
				const scrollPosition = window.scrollY

				// Calculate the scrollable area (total height minus viewport height)
				const scrollableHeight =
					articleHeight - windowHeight + headerHeight

				// Calculate progress as a percentage
				const progress = (scrollPosition / scrollableHeight) * 100
				setScrollProgress(Math.min(100, Math.max(0, progress)))
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Call once to set initial state

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<article
			ref={articleRef}
			className={`w-full mx-auto ${styles.articleContainer}`}>
			<div
				className={styles.progressBar}
				style={{ width: `${scrollProgress}%` }}></div>

			<header
				ref={headerRef}
				className={stickyStyles.stickyHeader}
				style={{ backgroundImage: `url(${post.image})` }}>
				<h1>{post.title}</h1>
			</header>

			<div className={stickyStyles.articleContent}>
				{/* Rest of your article content */}
				<div className='bg-fresh-breeze p-4 sm:p-6 md:p-8 relative z-10'>
					<div className='flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 md:mb-12'>
						{/* Author info */}
					</div>
				</div>

				<div className='prose prose-sm sm:prose lg:prose-lg px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-primary-500'>
					{renderContent(post.content)}
				</div>

				<footer className='px-4 sm:px-6 md:px-8 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto'>
					{/* Tags section */}
				</footer>
			</div>
		</article>
	)
}

const renderContent = content => {
	if (Array.isArray(content)) {
		return content.map((section, index) => (
			<div key={index} className='mb-6 sm:mb-8'>
				{section.section_title && (
					<h2 className='text-xl sm:text-2xl font-semibold mb-3 text-primary-500'>
						{section.section_title}
					</h2>
				)}
				{section.key_takeaways && (
					<ul className='list-disc pl-5 mb-4'>
						{section.key_takeaways.map((takeaway, i) => (
							<li key={i} className='mb-2'>
								{takeaway}
							</li>
						))}
					</ul>
				)}
				{section.content && <MDXContent source={section.content} />}
			</div>
		))
	}
	return <MDXContent source={content} />
}

export default Article
