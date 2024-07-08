import React from 'react'
import Image from 'next/image'

const Placeholder = ({ width, height, type, className }) => {
	const alt = type === 'icon' ? 'Placeholder icon' : 'Placeholder image'

	return (
		<Image
			src={`/api/placeholder/${width}x${height}`}
			width={width}
			height={height}
			alt={alt}
			className={`${className} ${
				type === 'icon' ? 'inline-block' : 'block w-full'
			}`}
		/>
	)
}

export default Placeholder
