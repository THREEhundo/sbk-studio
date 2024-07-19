import Image from 'next/image'
import React from 'react'
import ButtonWrapper from '../containers/ButtonWrapper'

const AboveTheFold = ({ obj, isHomepage }) => {
	//console.log(obj)
	return (
		<div className='mx-auto'>
			<Image
				src={obj.image}
				width={2048}
				height={2048}
				alt={`Glowing translucent balls on a wet surface`}
				className='pb-4'
			/>
			<div className='w-full md:w-2/3 mb-4'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-primary-500'>
					{obj.title}
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
						priority={true}>
						{obj.cta.buttonText}
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default AboveTheFold
