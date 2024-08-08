import React from 'react'
import SectionHeader from './SectionHeader'
import IconCard from './IconCard'

const IconCardSection = ({ title, description, cards, imgUrl, imageAlt }) => {
	return (
		<section className='responsive-container pb-12'>
			<SectionHeader
				title={title}
				description={description}
				imgUrl={imgUrl}
				imageAlt={imageAlt}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{cards.map((card, index) => (
						<IconCard
							key={index}
							title={card.title}
							description={card.description}
							icon={card.icon}
						/>
					))}
				</div>
			</SectionHeader>
		</section>
	)
}

export default IconCardSection
