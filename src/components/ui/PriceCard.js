import React from 'react'
import Placeholder from './Placeholder'
import ButtonWrapper from '../containers/ButtonWrapper'
import UpChevronSVG from '../icons/UpChevronSVG'

const getGradientClass = index => {
	const gradients = ['bg-dark-slate', 'bg-fresh-breeze']

	return gradients[index % gradients.length]
}
const PriceCard = ({
	id,
	title,
	index,
	price,
	description,
	list = [],
	button,
	className
}) => {
	return (
		<div
			id={id}
			className={`bg-neutral-800 ${getGradientClass(
				index
			)} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}>
			<div className='p-8'>
				<h3 className='text-2xl font-bold text-primary-500 mb-4'>
					{title}
				</h3>
				<div className='text-4xl font-bold text-secondary-500 mb-4'>
					{price}
				</div>
				<p className='text-primary-500 mb-6'>{description}</p>
				{Array.isArray(list) && list.length > 0 ? (
					<ul className='space-y-3 mb-8'>
						{list.map((feature, index) => (
							<li
								key={`pc-${index}`}
								className='flex items-start'>
								<UpChevronSVG className='mr-2 flex-shrink-0' />
								<span className='text-primary-500'>
									{feature.title}
								</span>
							</li>
						))}
					</ul>
				) : (
					<p className='text-primary-100 mb-8'>
						No features available.
					</p>
				)}
				{button && (
					<ButtonWrapper
						onClick='handleClick'
						variant='gradient'
						size='large'
						className='w-full'>
						Get Started
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default PriceCard
