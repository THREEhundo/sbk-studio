import { getData } from '@/lib/getData'
import React from 'react'
import FeaturesContainerSM from './FeaturesContainerSM'
import Placeholder from '../ui/Placeholder'

const TopicContainer = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<section>
			{data.map(topic => (
				<div key={topic.id}>
					<Placeholder width={320} height={240} type='image' />
					<h2>{topic.title}</h2>
					<p>{topic.description}</p>
					<FeaturesContainerSM dataSet={dataSet} />
				</div>
			))}
		</section>
	)
}

export default TopicContainer
