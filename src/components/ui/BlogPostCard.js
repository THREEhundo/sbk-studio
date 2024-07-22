import Image from 'next/image'
import Placeholder from './Placeholder'
import { formatDate } from '../utils/utils'
import Link from 'next/link'
import AuthorAvatar from './AuthorAvatar'

const BlogPostCard = ({ post }) => {
	return (
		<Link href={`/blog/${post.id}`} className='block'>
			<Image
				src={post.image}
				alt={post.altTag || `Image for ${post.title}`}
				width={2464}
				height={1856}
			/>
			<article
				className='border-b pb-4 group transition-colors duration-200'
				aria-labelledby={`post-title-${post.id}`}>
				<h2
					id={`post-title-${post.id}`}
					className='text-2xl font-semibold group-hover:text-secondary-500 transition-colors duration-200'>
					{post.title}
				</h2>
				<div className='flex items-center space-x-2'>
					{post.authorImageUrl ? (
						<AuthorAvatar
							imageUrl={post.authorImageUrl}
							size={50}
						/>
					) : (
						<div
							className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-primary-500'
							aria-hidden='true'>
							{/*<Placeholder width={40} height={40} type='icon' />*/}
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
				<div className='mt-2 flex items-center text-sm text-primary-500 space-x-2'>
					<span aria-label='Estimated reading time'>
						{post.readingTime} min read
					</span>
					<span aria-hidden='true'>•</span>
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
