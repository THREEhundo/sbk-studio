import React from 'react'
import FeaturesContainerSM from './FeaturesContainerSM'
import Image from 'next/image'
import { shimmer, toBase64 } from '../utils/utils'
import FeatureItem from '../ui/FeatureItems'

const TopicContainer = async ({ dataSet }) => {
	return (
		<section>
			{dataSet.map((topic, i) => (
				<div key={topic.id || i} className='grid gap-12 items-center'>
					<div className='grid gap-12 items-center'>
						<div>
							<h2 className='text-3xl font-bold text-primary-500 mb-6 transition-colors duration-300 hover:text-secondary-500'>
								{topic.h2}
							</h2>
							<p className='text-lg text-primary-100 mb-8 leading-relaxed'>
								{topic.description || topic.content}
							</p>
							{topic.content2 && (
								<p className='text-lg text-primary-100 mb-8 leading-relaxed'>
									{topic.content2}
								</p>
							)}
						</div>

						{topic.image && (
							<div className='transform transition-transform duration-300 hover:scale-105'>
								<Image
									src={topic.image}
									alt={
										topic.alt ||
										`Illustration for ${topic.h2}`
									}
									width={2464}
									height={1856}
									className='rounded-lg shadow-lg w-full h-auto'
									placeholder='blur'
									blurDataURL={`data:image/svg+xml;base64,${toBase64(
										shimmer(640, 360)
									)}`}
								/>
							</div>
						)}
						<div>
							{topic.h3s &&
								topic.h3s.map((item, i) => (
									<FeatureItem key={i} title={item} />
								))}
						</div>
					</div>
				</div>
			))}
		</section>
	)
}

export default TopicContainer
