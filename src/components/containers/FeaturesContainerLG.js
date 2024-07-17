import { getData } from '@/lib/getData'
import React from 'react'
import Card from '../ui/Card'

const FeaturesContainerLG = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{data[1].list.map(feature => (
				<Card
					key={feature.id}
					id={feature.id}
					title={feature.title}
					description={feature.description}
					image={feature.image}
					alt={feature.alt}
				/>
			))}
		</div>
	)
}

export default FeaturesContainerLG
