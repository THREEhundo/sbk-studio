import React from 'react'
import Placeholder from './Placeholder'

const Card = ({ id, title, description, image, featured }) => {
	return (
		<div
			id={id}
			className='flex flex-col h-full bg-neutral rounded-lg shadow-md overflow-hidden'>
			<Placeholder
				width={320}
				height={240}
				type='image'
				className='w-full'
			/>
			<div className='flex flex-col flex-grow p-4'>
				<h2 className='text-xl font-semibold mb-2'>{title}</h2>
				<p className='flex-grow'>{description}</p>
				{featured && (
					<span className='mt-2 inline-block bg-secondary-500 text-neutral px-2 py-1 rounded text-sm'>
						Featured
					</span>
				)}
			</div>
		</div>
	)
}

export default Card
