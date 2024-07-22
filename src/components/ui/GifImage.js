const GifImage = ({ src, alt, height }) => {
	return (
		<video
			width='auto'
			height={height}
			alt={alt}
			autoPlay={true}
			muted
			loop
			playsInline>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	)
}

export default GifImage
