import Image from 'next/image'
import { formatDate } from '@/components/utils/utils'
import MDXContent from './MDXContent'
import AuthorAvatar from './ui/AuthorAvatar'

const FullBlogPost = ({ post }) => {
	return (
		<article className='w-full mx-auto'>
			<div className='relative'>
				{' '}
				{/* Wrapper div */}
				<header className='bg-fresh-breeze p-4 sm:p-6 md:p-8 relative z-10'>
					<h1
						id='article-title'
						className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
						{post.title}
					</h1>
					<div className='flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 md:mb-12'>
						<div className='flex items-center mb-4 sm:mb-0'>
							{post.authorImageUrl ? (
								<AuthorAvatar
									imageUrl={post.authorImageUrl}
									size={48}
								/>
							) : (
								<div
									className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl sm:text-2xl text-primary-500'
									aria-label={`${post.author}'s initial`}>
									{post.author[0].toUpperCase()}
								</div>
							)}
							<div className='ml-3 sm:ml-4'>
								<p className='font-semibold text-sm sm:text-base'>
									{post.author}
								</p>
								<time
									dateTime={post.publishDate}
									className='text-xs sm:text-sm text-primary-500'>
									{formatDate(post.publishDate)}
								</time>
								<p className='text-xs sm:text-sm text-primary-500'>
									{post.readingTime} min read
								</p>
							</div>
						</div>
					</div>
				</header>
				<div className='w-full pb-[56.25%] relative'>
					{' '}
					{/* 16:9 aspect ratio container */}
					<Image
						src={post.image}
						alt={post.altTag || `Image for ${post.title}`}
						fill
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='prose prose-sm sm:prose lg:prose-lg px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto  text-primary-500'>
				{' '}
				{/* Negative margin to pull content up */}
				{renderContent(post.content)}
			</div>

			<footer className='px-4 sm:px-6 md:px-8 max-w-none sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto'>
				{post.tags && post.tags.length > 0 && (
					<section aria-labelledby='tag-list-title'>
						<h2
							id='tag-list-title'
							className='text-lg sm:text-xl font-semibold mb-2'>
							Tags
						</h2>
						<ul className='flex flex-wrap gap-2 pb-8 sm:pb-10 md:pb-12 '>
							{post.tags.map(tag => (
								<li
									key={tag}
									className='bg-secondary-900 text-neutral px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm'>
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

export default FullBlogPost
