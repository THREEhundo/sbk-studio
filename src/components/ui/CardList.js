import React from 'react'
import IconCard from './IconCard'
import PriceCard from './PriceCard'
import ServiceCard from './ServiceCard'
import HoverRevealComponent from '../containers/HoverRevealComponent '

const CardList = ({ cards }) => {
	console.log('cards: ', cards)
	return (
		<div className='card-list'>
			{cards.map((card, index) => {
				switch (card.type) {
					case 'IconCard':
						return <IconCard key={index} {...card} />
					case 'PriceCard':
						return <PriceCard key={index} {...card} />
					case 'ServiceCard':
						return <ServiceCard key={index} {...card} />
					case 'HoverCard':
						return <HoverRevealComponent key={index} {...card} />
					default:
						return null
				}
			})}
		</div>
	)
}
export default CardList
