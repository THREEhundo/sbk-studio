import { getData } from '@/lib/getData'
import React from 'react'
import IconCard from '../ui/IconCard'

const FeaturesContainerSM = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	// Flatten the nested structure
	const items = data.flatMap(service => service.list || [])

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
			{items.map((item, index) => {
				const isLastItem = index === items.length - 1
				const isOddCount = items.length % 2 !== 0

				let centerClass = ''
				if (isLastItem && isOddCount) {
					centerClass = 'sm:col-span-2 lg:col-start-2 lg:col-span-1'
				}

				return (
					<IconCard
						key={item.id}
						title={item.title}
						description={item.description}
						icon={item.icon}
						className={`bg-neutral-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-neutral-700 ${centerClass}`}
					/>
				)
			})}
		</div>
	)
}

export default FeaturesContainerSM
