import { getData } from '@/lib/getData'
import React from 'react'
import FeaturesContainerSM from './FeaturesContainerSM'
import Placeholder from '../ui/Placeholder'

const TopicContainer = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<section className='py-16 bg-neutral'>
			<div className='container mx-auto px-4'>
				{data.map(topic => (
					<div key={topic.id} className='mb-24 last:mb-0'>
						<div className='grid grid-rows-1 md:grid-rows-2 gap-12 items-center'>
							<div className='order-2 md:order-1'>
								<h2 className='text-3xl font-bold text-primary-500 mb-6 transition-colors duration-300 hover:text-secondary-500'>
									{topic.title}
								</h2>
								<p className='text-lg text-primary-100 mb-8 leading-relaxed'>
									{topic.description}
								</p>
								<div className='transform transition-transform duration-300 hover:scale-105'>
									<Placeholder
										width={320}
										height={240}
										type='image'
										className='rounded-lg shadow-lg w-full h-auto'
									/>
								</div>
							</div>
							<div className='order-1 md:order-2'>
								<FeaturesContainerSM dataSet={dataSet} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default TopicContainer
