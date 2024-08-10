import React from 'react'
import Image from 'next/image'
import { shimmer, toBase64 } from '../utils/utils'

const SectionHeader = ({
	title,
	description,
	imgUrl,
	imageAlt,
	imageType,
	children
}) => {
	const hasChildren = React.Children.count(children) > 0
	const onlyGrid = `grid gap-4`
	const gridContentImageIcons = `md:grid-cols-[minmax(auto,500px)_1fr]`
	const gridClasses = `max-w-[750px] m-auto justify-center`
	const flexClasses =
		'flex flex-wrap gap-4 justify-center mx-auto max-w-[500px]'

	const layoutClasses =
		title == 'Full-Service Support to Grow Your Online Presence'
			? `${onlyGrid} ${gridContentImageIcons}`
			: title == 'Affordable Custom Websites That Perform'
			? `${onlyGrid} ${gridClasses}`
			: ''

	const innerLayoutClasses = layoutClasses == '' ? flexClasses : ''
	const maxGridWith =
		title == 'Affordable Custom Websites That Perform'
			? `max-w-[800px]`
			: ''

	const fullColumnImage =
		title == 'Full-Service Support to Grow Your Online Presence'
			? `md:col-start-2 md:row-span-3`
			: ''
	const imageClasses = hasChildren
		? 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3'
		: 'flex-1 md:max-w-1/2'

	// For PriceCard Container the wrapper has no classes
	// add wrapper classes for flex

	return (
		<div className={layoutClasses}>
			<div className={innerLayoutClasses}>
				<h2 className='text-2xl font-bold mb-4'>{title}</h2>
				<p className='mb-4'>{description}</p>
			</div>
			{imgUrl && (
				<div className={`${fullColumnImage}`}>
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
			<div className='col-span-full'>{children}</div>
			{/*{hasChildren && (
				<div
					className={
						imgUrl && imageType === 'IconCard'
							? `md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-8 grid grid-cols-2 gap-4 ${maxGridWith}`
							: 'flex flex-wrap gap-4 justify-center'
					}>
					{React.Children.map(children, (child, index) => {
						const childClasses = [
							'rounded-lg p-4',
							imgUrl && imageType === 'IconCard'
								? index % 2 === 0
									? 'md:col-start-1 md:col-end-2'
									: 'md:col-start-2 md:col-end-3'
								: 'w-full flex-grow-0 flex-shrink-0'
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
			)}*/}
		</div>
	)
}

export default SectionHeader
