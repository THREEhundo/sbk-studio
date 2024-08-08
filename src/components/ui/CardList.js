import React from 'react'
import IconCard from './IconCard'
import PriceCard from './PriceCard'
import ServiceCard from './ServiceCard'
import HoverRevealComponent from '../containers/HoverRevealComponent '

const CardList = ({ cards, className }) => {
	return (
		<div className={className}>
			{cards.map((card, index) => {
				switch (card.type) {
					case 'IconCard':
						return (
							<IconCard
								key={`icon-${index}`}
								title={card.title}
								description={card.description}
								icon={card.icon}
							/>
						)
					case 'PriceCard':
						return (
							<PriceCard
								key={`price-${index}`}
								index={index}
								name={card.name}
								price={card.price}
								description={card.description}
								features={card.features}
								button={card.button}
							/>
						)
					case 'ServiceCard':
						return (
							<ServiceCard
								key={`service-${index}`}
								index={index}
								title={card.title}
								description={card.description}
								icon={card.icon}
							/>
						)
					case 'HoverCard':
						return (
							<HoverRevealComponent
								key={`hover-${index}`}
								index={index}
								title={card.title}
								content={card.content}
								content2={card.content2}
								button={card.button}
							/>
						)
					default:
						console.warn(`Unknown card type: ${card.type}`)
						return null
				}
			})}
		</div>
	)
}

export default CardList
