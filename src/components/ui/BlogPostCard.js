import Image from 'next/image'
import Placeholder from './Placeholder'
import { formatDate } from '../utils/utils'

const BlogPostCard = ({ post }) => {
	return (
		<article
			className='border-b pb-4 group hover:bg-gray-50 transition-colors duration-200'
			aria-labelledby={`post-title-${post.id}`}>
			<div className='space-y-2'>
				<h2
					id={`post-title-${post.id}`}
					className='text-2xl font-semibold group-hover:text-blue-600 transition-colors duration-200'>
					{post.title}
				</h2>
				<div className='flex items-center space-x-2'>
					{post.authorImageUrl ? (
						<Image
							src={post.authorImageUrl}
							width={40}
							height={40}
							className='rounded-full'
							alt=''
						/>
					) : (
						<div
							className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600'
							aria-hidden='true'>
							<Placeholder width={40} height={40} type='icon' />
						</div>
					)}
					<div>
						<p className='text-sm text-gray-600'>
							<span className='sr-only'>Written by </span>
							{post.author}
						</p>
						<time
							dateTime={post.publishDate.toISOString()}
							className='text-xs text-gray-500'>
							{formatDate(post.publishDate)}
						</time>
					</div>
				</div>
			</div>
			<p className='mt-2 text-gray-600 line-clamp-3'>{post.excerpt}</p>
			<div className='mt-2 flex items-center text-sm text-gray-500 space-x-2'>
				<span aria-label='Estimated reading time'>
					{post.readingTime} min read
				</span>
				<span aria-hidden='true'>•</span>
				<ul className='flex flex-wrap gap-2' aria-label='Tags'>
					{post.tags.map(tag => (
						<li
							key={tag}
							className='bg-gray-200 px-2 py-1 rounded-full text-xs'>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default BlogPostCard
