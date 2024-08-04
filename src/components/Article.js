'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { formatDate, shimmer, toBase64 } from '@/components/utils/utils'
import MDXContent from './MDXContent'
import AuthorAvatar from './ui/AuthorAvatar'
import styles from '../app/styles/ArticleProgressBar.module.css'
import stickyStyles from '../app/styles/StickyHeader.module.css'
import Placeholder from './ui/Placeholder'

const Article = ({ post }) => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const [truncateTitle, setTruncateTitle] = useState(false)
	const articleRef = useRef(null)
	const headerRef = useRef(null)
	const titleRef = useRef(null)

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

				// Determine if title should be truncated
				setTruncateTitle(scrollPosition > windowHeight * 0.5)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Call once to set initial state

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const adjustTitleWidth = () => {
			if (titleRef.current && headerRef.current) {
				const headerWidth = headerRef.current.offsetWidth
				titleRef.current.style.maxWidth = `${headerWidth - 40}px` // 40px for padding
			}
		}

		adjustTitleWidth()
		window.addEventListener('resize', adjustTitleWidth)

		return () => window.removeEventListener('resize', adjustTitleWidth)
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
				<h1
					ref={titleRef}
					className={`${
						truncateTitle ? stickyStyles.truncateText : ''
					}`}
					title={post.title}>
					{post.title}
				</h1>
			</header>

			<div className={stickyStyles.articleContent}>
				<div className='bg-fresh-breeze p-4 sm:p-6 md:p-8 relative z-10'>
					<div className='flex flex-col sm:flex-row items-start sm:items-center'>
						<div className='flex items-center space-x-3 justify-center'>
							{post.authorImageUrl ? (
								<AuthorAvatar
									imageUrl={post.authorImageUrl}
									size={40}
									altText={`${post.author} Profile Picture`}
									blurDataURL={`data:image/svg+xml;base64,${toBase64(
										shimmer(640, 360)
									)}`}
								/>
							) : (
								<div
									className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-primary-500'
									aria-hidden='true'>
									<Placeholder
										width={40}
										height={40}
										type='icon'
									/>
								</div>
							)}
							<div>
								<p className='text-sm text-neutral'>
									<span className='sr-only'>Written by </span>
									{post.author}
								</p>
								<time
									dateTime={post.publishDate}
									className='text-xs text-neutral'>
									{formatDate(post.publishDate)}
								</time>
							</div>
						</div>
					</div>
				</div>

				<div className='prose prose-sm sm:prose lg:prose-lg px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-primary-500'>
					{renderContent(post.content)}
				</div>

				<footer className='px-4 sm:px-6 md:px-8 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto'>
					<ul className='flex flex-wrap gap-2' aria-label='Tags'>
						{post.tags.map(tag => (
							<li
								key={tag}
								className='bg-secondary-500 text-neutral px-2 py-1 rounded-full text-xs'>
								{tag}
							</li>
						))}
					</ul>
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
