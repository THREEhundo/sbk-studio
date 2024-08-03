import React from 'react'
import Image from 'next/image'
import { isMp4, shimmer, toBase64 } from '../utils/utils'
import GifImage from './GifImage'

const Card = ({
	id,
	title,
	description,
	image,
	featured,
	list,
	alt,
	className
}) => {
	isMp4(image)
	return (
		<div
			key={id}
			id={id}
			className='bg-neutral-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col flex-grow'>
			<div className={`p-6 ${className}`}>
				{image && (
					<div className='mb-4'>
						{isMp4(image) ? (
							<GifImage
								src={image}
								alt={alt}
								width={320}
								height={320}
								className='w-full h-auto rounded-lg'
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(640, 360)
								)}`}
							/>
						) : (
							<Image
								src={image}
								alt={alt}
								width={320}
								height={240}
								className='w-full h-auto rounded-lg'
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(640, 360)
								)}`}
							/>
						)}
					</div>
				)}
				<div className='flex flex-col flex-grow mb-2'>
					<h2 className='text-2xl font-bold text-primary-500 flex-grow'>
						{title}
					</h2>
					<p className='text-primary-100 flex-grow'>{description}</p>
					{list && Array.isArray(list) && list.length > 0 && (
						<ul className='space-y-2'>
							{list.map((item, index) => (
								<li key={index} className='flex items-start'>
									<svg
										className='w-5 h-5 text-secondary-500 mr-2 flex-shrink-0'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'></path>
									</svg>
									<span className='text-primary-100'>
										{item.title}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
				{featured && (
					<div className='mt-4 inline-block bg-secondary-500 text-neutral px-3 py-1 rounded-full max-w-max text-sm font-semibold'>
						Featured
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
