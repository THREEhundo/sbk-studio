import Image from 'next/image'
import React from 'react'
import ButtonWrapper from '../containers/ButtonWrapper'
import { shimmer, toBase64 } from '../utils/utils'

const AboveTheFold = ({ obj, isHomepage }) => {
	const featureSizes = '(max-width: 1280px) calc(100vw - 96px), 1184px'
	return (
		<div className='grid gap-4 grid-cols-1 md:grid-cols-5 auto-rows-fr h-full'>
			<div className='relative w-full h-full overflow-hidden col-span-full row-span-4 md:row-start-1 md:row-end-6'>
				{/*md:col-span-5 md:row-span-full*/}
				<Image
					src={obj.image}
					fill
					alt={obj.imageAlt}
					className='object-cover'
					priority={true}
					sizes={featureSizes}
					placeholder='blur'
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(640, 360)
					)}`}
				/>
			</div>
			<div className='w-full z-10 bg-neutral-800 bg-opacity-75 col-span-full row-span-2 self-end p-5 flex flex-col justify-end md:row-start-5 md:row-end-6 md:col-start-1 md:col-end-4'>
				{/*md:col-span-3 md:row-start-2*/}
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500'>
					{obj.h1}
				</h1>
				{obj.description ? (
					<p className='text-primary-100 pb-6'>{obj.description}</p>
				) : (
					<p className='text-primary-100 pb-6'>{obj.cta.heading}</p>
				)}
				{isHomepage && (
					<ButtonWrapper
						variant='primary'
						size='large'
						href='/contact'
						className='max-w-[250px]'>
						{obj.cta.buttonText}
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default AboveTheFold
