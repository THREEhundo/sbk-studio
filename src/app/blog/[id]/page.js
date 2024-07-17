// File: /src/app/blog/[id]/page.js

import { getBlogPostById } from '@/lib/getBlogPostById'
import FullBlogPost from '@/components/FullBlogPost'
import Layout from '@/components/Layout'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Generate metadata for the page
export async function generateMetadata({ params }) {
	const post = await getBlogPostById(params.id)

	if (!post) {
		return {
			title: 'Post Not Found'
		}
	}

	return {
		title: `${post.title} | SBK Studio Blog`,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [{ url: post.image }]
		}
	}
}

// Component: BlogPostPage
// Purpose: Renders a single blog post page
const BlogPostPage = async ({ params }) => {
	const post = await getBlogPostById(params.id)

	// If post not found, show 404 page
	if (!post) {
		notFound()
	}

	return (
		<Layout>
			<main className='bg-neutral min-h-screen'>
				<div className='responsive-container py-12'>
					<article className='bg-neutral-800 rounded-lg shadow-xl overflow-hidden'>
						<FullBlogPost post={post} />
					</article>
					<div className='mt-8 text-center'>
						<a
							href='/blog'
							className='text-secondary-500 hover:text-secondary-900 transition-colors duration-300'>
							← Back to all posts
						</a>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default BlogPostPage
