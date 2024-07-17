import React from 'react'
import FeaturesContainerSM from './FeaturesContainerSM'
import Image from 'next/image'
import { getData } from '@/lib/getData'

const TopicContainer = async ({ dataSet }) => {
	const data = await getData(`${dataSet}.json`)

	return (
		<section className='py-16 bg-neutral'>
			<div className='mx-auto'>
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
									<Image
										src={topic.image}
										alt={
											topic.alt ||
											`Illustration for ${topic.title}`
										}
										width={2464}
										height={1856}
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
