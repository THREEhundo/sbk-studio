import Image from 'next/image'
import React from 'react'

const Placeholder = ({ width, height, type, className }) => {
	const sizes = type === 'icon' ? '(max-width: 768px, 48px, 24px' : '100vw'
	const alt = type === 'icon' ? 'Placeholder icon' : 'Placeholder image'
	return (
		<Image
			src={`/api/placeholder/${width}/${height}`}
			width={width}
			height={height}
			alt={alt}
			sizes={sizes}
			className={`${className} ${
				type === 'icon' ? 'inline-block' : 'block w-full'
			}`}
		/>
	)
}

export default Placeholder
