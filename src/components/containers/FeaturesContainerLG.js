import { getData } from '@/lib/getData'
import React from 'react'
import Card from '../ui/Card'

const FeaturesContainerLG = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<div>
			{data[1].list.map(feature => (
				<Card
					key={feature.id}
					title={feature.title}
					description={feature.description}
				/>
			))}
		</div>
	)
}

export default FeaturesContainerLG
