import React from 'react'
import Card from '../ui/Card'

const FeaturesContainerLG = ({ dataSet }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{dataSet.sections.map(feature => (
				<div key={feature.id}>
					<Card
						id={feature.id}
						title={feature.title}
						description={feature.description}
						image={feature.image}
						alt={feature.alt}
					/>
				</div>
			))}
		</div>
	)
}

export default FeaturesContainerLG
