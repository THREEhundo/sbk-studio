import React from 'react'
import Placeholder from './Placeholder'

const IconCard = ({ id, title, description, image }) => {
	return (
		<div id={id}>
			<h3>{title}</h3>
			<p>{description}</p>
			<Placeholder width={25} height={25} type='icon' />
		</div>
	)
}

export default IconCard
