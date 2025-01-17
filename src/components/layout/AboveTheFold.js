import Image from 'next/image'
import React from 'react'
import ButtonWrapper from '../containers/ButtonWrapper'
import { shimmer, toBase64 } from '../utils/utils'
import useConnectionQuality from '@/lib/useConnectionQuality'

const AboveTheFold = ({ obj, isHomepage }) => {
	const featureSizes = '(max-width: 1280px) calc(100vw - 96px), 1184px'
	const imageQuality = useConnectionQuality()

	// Add default values and error handling
	if (!obj) {
		console.error('AboveTheFold: obj prop is undefined')
		return null // or return a fallback UI
	}
	const {
		image = '',
		imageAlt = '',
		h1 = '',
		description = '',
		cta = { heading: '', buttonText: '' }
	} = obj

	return (
		<div className='grid gap-4 grid-cols-1 md:grid-cols-5 auto-rows-fr h-full'>
			<div className='relative w-full h-full overflow-hidden col-span-full row-span-4 md:row-start-1 md:row-end-6'>
				{image && (
					<Image
						src={image}
						fill
						alt={imageAlt}
						className='object-cover'
						priority={true}
						sizes={featureSizes}
						quality={imageQuality}
						placeholder='blur'
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(640, 360)
						)}`}
					/>
				)}
			</div>
			<div className='w-full z-10 bg-neutral-800 bg-opacity-75 col-span-full row-span-2 self-end p-5 flex flex-col justify-end md:row-start-5 md:row-end-6 md:col-start-1 md:col-end-4'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500'>
					{h1}
				</h1>
				<p className='text-primary-100 pb-6'>
					{description || cta.heading}
				</p>
				{isHomepage && cta.buttonText && (
					<ButtonWrapper
						variant='primary'
						size='large'
						href='/contact'
						className='max-w-[250px]'>
						{cta.buttonText}
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default AboveTheFold
