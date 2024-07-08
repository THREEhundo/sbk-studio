import React from 'react'
import PriceCard from '../ui/PriceCard'
import { getData } from '@/lib/getData'

const PricePackageContainer = async () => {
	const pricing = await getData('website-packages.json')

	return (
		<section>
			{pricing.packages.map(bundle => (
				<PriceCard
					key={bundle.id}
					id={bundle.id}
					title={bundle.title}
					description={bundle.description}
					image=''
					list={bundle.list}
				/>
			))}
		</section>
	)
}

export default PricePackageContainer
