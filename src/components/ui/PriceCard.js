import React from 'react'
import Placeholder from './Placeholder'
import ButtonWrapper from '../containers/ButtonWrapper'
import UpChevronSVG from '../icons/UpChevronSVG'

const getGradientClass = index => {
	const gradients = ['bg-dark-slate', 'bg-fresh-breeze']

	return gradients[index % gradients.length]
}
const PriceCard = ({ index, list = [], className, ...card }) => {
	return (
		<div
			className={`bg-neutral-800 ${getGradientClass(
				index
			)} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl  h-full min-w-80`}>
			<div className='p-8 h-full flex flex-col justify-between grow'>
				<h3 className='text-2xl font-bold text-primary-500 mb-4'>
					{card.name}
				</h3>
				<div className='text-4xl font-bold text-secondary-500 mb-4'>
					{card.price}
				</div>
				<p className='text-primary-500 mb-6'>{card.description}</p>
				{Array.isArray(card.features) && card.features.length > 0 ? (
					<ul className='space-y-3 mb-8'>
						{card.features.map((feature, index) => (
							<li
								key={`pc-${index}`}
								className='flex items-start'>
								<UpChevronSVG className='mr-2 flex-shrink-0' />
								<span className='text-primary-500'>
									{feature}
								</span>
							</li>
						))}
					</ul>
				) : (
					<p className='text-primary-100 mb-8'>
						No features available.
					</p>
				)}
				{card.button && (
					<ButtonWrapper
						variant='gradient'
						size='large'
						className='w-full'
						href='/contact'>
						Get Started
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default PriceCard
