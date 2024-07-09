import Image from 'next/image'
import { formatDate } from '@/components/utils/utils'
import MDXContent from './MDXContent'

const FullBlogPost = ({ post }) => {
	const formatPublishDate = date => {
		if (date instanceof Date && !isNaN(date)) {
			return date.toISOString()
		}
		// If it's a string, try to parse it
		if (typeof date === 'string') {
			const parsedDate = new Date(date)
			if (!isNaN(parsedDate)) {
				return parsedDate.toISOString()
			}
		}
		// If all else fails, return a fallback string
		return 'Invalid Date'
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
				<MDXContent source={post.content} />
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

			<section
				className='mt-8 pt-8 border-t'
				aria-labelledby='author-info'>
				<h2 id='author-info' className='text-xl font-semibold mb-2'>
					About the Author
				</h2>
				<div className='flex items-center space-x-4'>
					{post.authorImageUrl ? (
						<Image
							src={post.authorImageUrl}
							width={80}
							height={80}
							className='rounded-full'
							alt={`Profile picture of ${post.author}`}
						/>
					) : (
						<div
							className='w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl text-gray-600'
							aria-label={`${post.author}'s initial`}>
							{post.author[0].toUpperCase()}
						</div>
					)}
					<div>
						<p className='font-semibold'>{post.author}</p>
						<p className='text-sm text-gray-600'>
							{post.authorBio || 'No bio available'}
						</p>
					</div>
				</div>
			</section>
		</article>
	)
}

export default FullBlogPost
