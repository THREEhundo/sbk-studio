import { getBlogPostById } from '@/lib/getBlogPostById'
import FullBlogPost from '@/components/FullBlogPost'
import Layout from '@/components/Layout'
import { serialize } from 'next-mdx-remote/serialize'

const BlogPostPage = async ({ params }) => {
	const post = await getBlogPostById(params.id)

	if (!post) {
		return (
			<Layout>
				<div>Post not found</div>
			</Layout>
		)
	}

	return (
		<Layout>
			<FullBlogPost post={post} />
		</Layout>
	)
}

export default BlogPostPage
