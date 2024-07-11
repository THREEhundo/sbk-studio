import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { formatDate } from '@/components/utils/utils'

const MDXContent = dynamic(() => import('./MDXContent'), { ssr: false })

const FullBlogPost = ({ post }) => {
	const renderContent = content => {
		if (Array.isArray(content)) {
			return content.map((section, index) => (
				<div key={index}>
					{section.section_title && <h2>{section.section_title}</h2>}
					{section.key_takeaways && (
						<ul>
							{section.key_takeaways.map((takeaway, i) => (
								<li key={i}>{takeaway}</li>
							))}
						</ul>
					)}
					{section.content && <MDXContent source={section.content} />}
				</div>
			))
		}
		return <MDXContent source={content} />
	}

	return (
		<article className='max-w-3xl mx-auto px-4 py-8'>
			<header>
				<h1 id='article-title' className='text-4xl font-bold mb-4'>
					{post.title}
				</h1>
				<div className='flex items-center space-x-4 mb-6'>
					{post.authorImageUrl ? (
						<Image
							src={post.authorImageUrl}
							width={64}
							height={64}
							className='rounded-full'
							alt={`Profile picture of ${post.author}`}
						/>
					) : (
						<div
							className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-600'
							aria-label={`${post.author}'s initial`}>
							{post.author[0].toUpperCase()}
						</div>
					)}
					<div>
						<p className='font-semibold'>{post.author}</p>
						<time
							dateTime={post.publishDate}
							className='text-sm text-gray-600'>
							{formatDate(post.publishDate)}
						</time>
						<p className='text-sm text-gray-600'>
							{post.readingTime} min read
						</p>
					</div>
				</div>
			</header>

			<div className='prose prose-lg max-w-none mb-8'>
				{renderContent(post.content)}
			</div>

			<footer>
				{post.tags && post.tags.length > 0 && (
					<section aria-labelledby='tag-list-title'>
						<h2
							id='tag-list-title'
							className='text-xl font-semibold mb-2'>
							Tags
						</h2>
						<ul className='flex flex-wrap gap-2'>
							{post.tags.map(tag => (
								<li
									key={tag}
									className='bg-gray-200 px-3 py-1 rounded-full text-sm'>
									{tag}
								</li>
							))}
						</ul>
					</section>
				)}
			</footer>
		</article>
	)
}

export default FullBlogPost
