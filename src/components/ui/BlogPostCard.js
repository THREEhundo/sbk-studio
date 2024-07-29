import Image from 'next/image'
import Placeholder from './Placeholder'
import { formatDate, shimmer, toBase64 } from '../utils/utils'
import Link from 'next/link'
import AuthorAvatar from './AuthorAvatar'

const BlogPostCard = ({ post, maxHeight }) => {
	console.log('BlogPostCard received post:', {
		id: post.id,
		title: post.title
	})

	const featureSizes = '(max-width: 1280px) calc(100vw - 96px), 1184px'
	const cardSizes = '(max-width: 767px) calc(100vw - 64px),  512px'
	const sizesGive = post.feature ? featureSizes : cardSizes

	return (
		<Link href={`/blog/${post.id}`}>
			<div
				style={{ maxHeight: maxHeight }}
				className={`overflow-hidden mb-4`}>
				<Image
					src={post.image}
					alt={post.altTag || `Image for ${post.title}`}
					width={2464}
					height={1856}
					className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105'
					style={{ maxHeight: `100%` }}
					sizes={sizesGive}
					priority
					placeholder='blur'
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(2464, 1856)
					)}`}
				/>
			</div>
			<article
				className='border-b pb-8 space-y-4 group-hover:border-secondary-500 transition-colors duration-300'
				aria-labelledby={`post-title-${post.id}`}>
				<h2
					id={`post-title-${post.id}`}
					className='text-2xl font-semibold group-hover:text-secondary-500 transition-colors duration-300'>
					{post.title}
				</h2>
				<div className='flex items-center space-x-3'>
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
							<Placeholder width={40} height={40} type='icon' />
						</div>
					)}
					<div>
						<p className='text-sm text-primary-500'>
							<span className='sr-only'>Written by </span>
							{post.author}
						</p>
						<time
							dateTime={post.publishDate}
							className='text-xs text-primary-500'>
							{formatDate(post.publishDate)}
						</time>
					</div>
				</div>
				<p className='mt-2 text-primary-500 line-clamp-3'>
					{post.excerpt}
				</p>
				<div className='flex items-center text-sm text-primary-500 space-x-3'>
					<ul className='flex flex-wrap gap-2' aria-label='Tags'>
						{post.tags.map(tag => (
							<li
								key={tag}
								className='bg-secondary-500 text-neutral px-2 py-1 rounded-full text-xs'>
								{tag}
							</li>
						))}
					</ul>
				</div>
			</article>
		</Link>
	)
}

export default BlogPostCard
