import Image from 'next/image'
const AuthorAvatar = ({ imageUrl, altText, size = 48 }) => {
	return (
		<div
			className={`w-${size / 4} h-${
				size / 4
			} rounded-full overflow-hidden relative`}>
			<Image
				src={imageUrl}
				width={size}
				height={size}
				className='object-cover object-center absolute top-[-0.6rem] left-0'
				alt={altText || 'Author Image'}
				priority={true}
				blurDataURL={`data:image/svg+xml;base64,${toBase64(
					shimmer(640, 360)
				)}`}
			/>
		</div>
	)
}

export default AuthorAvatar
