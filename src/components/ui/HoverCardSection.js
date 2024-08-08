import React from 'react'
import SectionHeader from './SectionHeader'
import HoverRevealComponent from '../containers/HoverRevealComponent '

const HoverCardSection = ({ title, description, cards, imgUrl, imageAlt }) => {
	return (
		<section className='responsive-container pb-12'>
			<SectionHeader
				title={title}
				description={description}
				imgUrl={imgUrl}
				imageAlt={imageAlt}>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{cards.map((card, index) => (
						<HoverRevealComponent
							key={index}
							title={card.title}
							content={card.content}
							content2={card.content2}
							button={card.button}
						/>
					))}
				</div>
			</SectionHeader>
		</section>
	)
}

export default HoverCardSection
