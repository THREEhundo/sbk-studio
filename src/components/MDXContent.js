'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MDXRemote = dynamic(
	() => import('next-mdx-remote').then(mod => mod.MDXRemote),
	{
		ssr: false
	}
)

const MDXContent = ({ source }) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null // or a loading spinner
	}

	return <MDXRemote {...source} />
}

export default MDXContent
