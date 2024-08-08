import React from 'react'

const PriceCardContainer = async ({ children }) => {
	return (
		<section className='pt-8 px-20 responsive-container'>
			{children}
		</section>
	)
}

export default PriceCardContainer
