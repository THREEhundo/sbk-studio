import { getData } from '@/lib/getData'
import React from 'react'
import IconCard from '../ui/IconCard'

const FeaturesContainerSM = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<div>
			{data.map(
				service =>
					service.list &&
					service.list.map(item => (
						<IconCard
							key={item.id}
							title={item.title}
							description={item.description}
							image=''
						/>
					))
			)}
		</div>
	)
}

export default FeaturesContainerSM
