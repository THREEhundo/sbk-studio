import React from 'react'

const FeatureSection = ({ title, content1, content2 }) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{content1}</p>
			<p>{content2}</p>
		</section>
	)
}

export default FeatureSection
