import { getData } from '@/lib/getData'
import React from 'react'
import IconCard from '../ui/IconCard'

const FeaturesContainerSM = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
			{data.map(
				service =>
					service.list &&
					service.list.map(item => (
						<IconCard
							key={item.id}
							title={item.title}
							description={item.description}
							icon={item.icon}
							className='bg-neutral-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-neutral-700'
						/>
					))
			)}
		</div>
	)
}

export default FeaturesContainerSM
