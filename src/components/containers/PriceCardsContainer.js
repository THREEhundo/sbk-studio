import React from 'react'

const PriceCardContainer = async ({ children }) => {
	return (
		<section className='pt-8 px-20 responsive-container'>
			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
				{children}
			</div>
		</section>
	)
}

export default PriceCardContainer
