import React from 'react'
import PriceCard from '../ui/PriceCard'
import { getData } from '@/lib/getData'

const PricePackageContainer = async () => {
	const pricing = await getData('website-packages.json')

	return (
		<section className='py-20 bg-neutral'>
			<div className='mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{pricing.packages.map((bundle, index) => (
						<PriceCard
							key={bundle.id}
							index={index}
							id={bundle.id}
							title={bundle.title}
							price={bundle.price}
							description={bundle.description}
							list={bundle.list}
							button={bundle.button}
							className={
								bundle.id === 'feature-package'
									? 'md:scale-105 md:shadow-xl '
									: ''
							}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default PricePackageContainer
