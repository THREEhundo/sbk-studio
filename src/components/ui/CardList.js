import React from 'react'
import IconCard from './IconCard'
import PriceCard from './PriceCard'
import ServiceCard from './ServiceCard'
import HoverRevealComponent from '../containers/HoverRevealComponent '

const CardList = ({ cards }) => {
	return (
		<>
			{cards.map((card, index) => {
				switch (card.type) {
					case 'IconCard':
						return <IconCard key={index} index={index} {...card} />
					case 'PriceCard':
						return <PriceCard key={index} index={index} {...card} />
					case 'ServiceCard':
						return (
							<ServiceCard key={index} index={index} {...card} />
						)
					case 'HoverCard':
						return (
							<HoverRevealComponent
								key={index}
								index={index}
								{...card}
							/>
						)
					default:
						return null
				}
			})}
		</>
	)
}
export default CardList
