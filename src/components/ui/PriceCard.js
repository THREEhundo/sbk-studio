import React from 'react'
import Placeholder from './Placeholder'
import ButtonWrapper from '../containers/ButtonWrapper'

const PriceCard = ({ id, title, description, image, list }) => {
	return (
		<div id={id}>
			<h2>{title}</h2>
			<p>{description}</p>
			<ul>
				{list.map((feature, i) => (
					<li key={`pc-${i}`}>
						<Placeholder width={25} height={25} type='icon' />
						<p>{feature.title}</p>
					</li>
				))}
			</ul>
			<ButtonWrapper onClick='handleClick' variant='primary' size='large'>
				Contact Us
			</ButtonWrapper>
		</div>
	)
}

export default PriceCard
