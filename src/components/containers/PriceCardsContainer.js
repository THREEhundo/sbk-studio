import React from 'react'

const PriceCardContainer = async ({ children }) => {
	return (
		<section className='py-20 responsive-container'>
			<div className='mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
					{children}
				</div>
			</div>
		</section>
	)
}

export default PriceCardContainer
