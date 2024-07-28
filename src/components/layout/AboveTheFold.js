import Image from 'next/image'
import React from 'react'
import ButtonWrapper from '../containers/ButtonWrapper'

const AboveTheFold = ({ obj, isHomepage }) => {
	return (
		<div className='grid gap-4 grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-2 min-h-[50vh] h-full'>
			<div className='relative w-full h-full overflow-hidden col-start-1 col-end-1 md:col-end-6 row-start-1 row-end-5 md:row-start-1 md:row-end-3'>
				<Image
					src={obj.image}
					fill
					alt={obj.imageAlt}
					className='object-cover'
					priority={true}
				/>
			</div>
			<div className='w-full z-10 bg-neutral-800 bg-opacity-75 col-start-1 col-end-1 md:col-end-4 md:col-start-1 row-start-5 row-end-7 md:row-start-2 md:row-end-3 md:self-end md:p-5'>
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
						href='/contact'>
						{obj.cta.buttonText}
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default AboveTheFold
