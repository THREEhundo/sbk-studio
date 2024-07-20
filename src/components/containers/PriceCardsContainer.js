import React from 'react'
import PriceCard from '../ui/PriceCard'
import { getData } from '@/lib/getData'

const PricePackageContainer = async ({ children }) => {
	const pricing = await getData('website-packages.json')

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

export default PricePackageContainer
