import React from 'react'
import SectionHeader from './SectionHeader'
import PriceCard from './PriceCard'

const PriceCardSection = ({ title, description, cards, imgUrl, imageAlt }) => {
	return (
		<section className='responsive-container pb-12'>
			<SectionHeader
				title={title}
				description={description}
				imgUrl={imgUrl}
				imageAlt={imageAlt}
				className='flex'>
				{/*<div className='flex flex-wrap '>*/}
				{cards.map((card, index) => (
					<PriceCard
						key={index}
						index={index}
						name={card.name}
						price={card.price}
						description={card.description}
						features={card.features}
						button={card.button}
					/>
				))}
				{/*</div>*/}
			</SectionHeader>
		</section>
	)
}

export default PriceCardSection
