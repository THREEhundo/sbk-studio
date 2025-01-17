import BlogPostCard from '../ui/BlogPostCard'
import { getData } from '@/lib/getData'

const BlogPostContainer = async ({ dataSet }) => {
	let posts = []
	try {
		if (typeof dataSet === 'string') {
			// If dataSet is a string, assume it's the name of the file to fetch
			posts = await getData(dataSet)
		} else if (Array.isArray(dataSet)) {
			// If dataSet is already an array, use it directly
			posts = dataSet
		} else {
			return <div>Error: Invalid data format</div>
		}

		if (!Array.isArray(posts) || posts.length === 0) {
			return <div>No blog posts available</div>
		}

		return (
			<section className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{posts.map(
					(post, i) =>
						i !== 0 && <BlogPostCard key={post.id} post={post} />
				)}
			</section>
		)
	} catch (error) {
		return <div>Error loading blog posts. Please try again later.</div>
	}
}

export const getBlogPosts = dataSet =>
	dataSet.map(item =>
		createBlogPost(
			item.id,
			item.title,
			item.content,
			item.author,
			item.publishDate,
			item.tags,
			item.authorImageUrl,
			item.image,
			item.altTag
		)
	)

export default BlogPostContainer
