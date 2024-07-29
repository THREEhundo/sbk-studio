import React from 'react'
import Image from 'next/image'

const SectionHeader = ({
	title,
	description,
	imgUrl,
	imageAlt,
	imageType,
	children
}) => {
	const hasChildren = React.Children.count(children) > 0
	const gridClasses =
		'grid gap-4 p-4 md:grid-cols-4 md:grid-rows-[repeat(4,minmax(0,1fr))]'
	const flexClasses = 'flex flex-wrap gap-4'
	const layoutClasses = hasChildren ? gridClasses : flexClasses

	const contentClasses = hasChildren
		? 'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3'
		: 'flex-1 md:max-w-1/2'

	const imageClasses = hasChildren
		? 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3'
		: 'flex-1 md:max-w-1/2'
	return (
		<div className={''}>
			<div className={''}>
				<h2 className='text-2xl font-bold mb-4'>{title}</h2>
				<p className='mb-4'>{description}</p>
			</div>
			{imgUrl && (
				<div className={''}>
					<Image
						width={2048}
						height={2048}
						src={imgUrl}
						alt={imageAlt}
						className='rounded-lg shadow-lg w-full h-full object-cover'
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(640, 360)
						)}`}
					/>
				</div>
			)}
			{hasChildren && (
				<div
					className={
						imgUrl && imageType === 'IconCard'
							? 'md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-8 grid grid-cols-2 gap-4'
							: 'flex flex-wrap gap-4 w-full'
					}>
					{React.Children.map(children, (child, index) => {
						const childClasses = [
							'bg-gray-200 rounded-lg p-4',
							imgUrl && imageType === 'IconCard'
								? index % 2 === 0
									? 'md:col-start-1 md:col-end-2'
									: 'md:col-start-2 md:col-end-3'
								: 'w-full md:w-calc-50-minus-2 flex-grow-0 flex-shrink-0'
						].join(' ')

						if (React.isValidElement(child)) {
							const finalClassName = `${
								child.props.className || ''
							} ${childClasses}`.trim()

							return React.cloneElement(child, {
								className: finalClassName
							})
						} else {
							return <div className={childClasses}>{child}</div>
						}
					})}
				</div>
			)}
		</div>
	)
}

export default SectionHeader
