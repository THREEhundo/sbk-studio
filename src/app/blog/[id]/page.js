import { getBlogPostById } from '@/lib/getBlogPostById'
import FullBlogPost from '@/components/FullBlogPost'

const BlogPostPage = async ({ params }) => {
	console.log('Params', params)
	const post = await getBlogPostById(params.id)

	if (!post) {
		return <div>Post not found</div>
	}

	return <FullBlogPost post={post} />
}

export default BlogPostPage
