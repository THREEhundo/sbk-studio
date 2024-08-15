import React from 'react'
import SectionHeader from './SectionHeader'
import SectionFooter from './SectionFooter'
import IconCard from './IconCard'
import PriceCard from './PriceCard'

const CardSection = ({
	title,
	description,
	cards,
	footerContent,
	content2,
	imgUrl,
	imageAlt,
	specificId
}) => {
	const priceCardPresent = cards.some(card => card.type === 'PriceCard')
	const aboutPageContainerClasses =
		specificId ===
		'SBK STUDIO | About Us | Small Business Web Design & Development'
			? 'flex flex-col items-center'
			: ''

	return (
		<section
			className={`responsive-container pb-12 ${aboutPageContainerClasses}`}>
			<SectionHeader
				title={title}
				description={description}
				imgUrl={imgUrl}
				imageAlt={imageAlt}
				hasPriceCard={priceCardPresent}>
				{cards && cards.length > 0 && (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{cards.map((card, index) => {
							if (card.type === 'IconCard') {
								return (
									<IconCard
										key={index}
										title={card.title}
										icon={card.icon}
										description={card.description}
									/>
								)
							} else if (card.type === 'PriceCard') {
								return (
									<PriceCard
										key={index}
										index={index}
										name={card.name}
										price={card.price}
										description={card.description}
										features={card.features}
										button={card.button}
									/>
								)
							}
							return null
						})}
					</div>
				)}
			</SectionHeader>
			{footerContent && (
				<SectionFooter content={footerContent} content2={content2} />
			)}
		</section>
	)
}

export default CardSection
