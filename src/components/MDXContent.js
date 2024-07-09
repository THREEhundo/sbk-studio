'use client'

import { MDXRemote } from 'next-mdx-remote'

const MDXContent = ({ source }) => {
	return <MDXRemote {...source} />
}

export default MDXContent
