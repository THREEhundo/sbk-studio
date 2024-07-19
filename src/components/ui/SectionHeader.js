import React from 'react'

const SectionHeader = ({ title, description, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			{children}
		</div>
	)
}

export default SectionHeader
