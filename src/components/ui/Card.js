import React from 'react'
import Placeholder from './Placeholder'

const Card = ({ id, title, description, image, featured }) => {
	return (
		<div id={id}>
			<h2>{title}</h2>
			<p>{description}</p>
			<Placeholder width={320} height={240} type='image' />
		</div>
	)
}

export default Card
