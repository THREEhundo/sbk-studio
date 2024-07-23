import React from 'react'

const SectionFooter = ({ content, content2 }) => {
	return (
		<div>
			<p>{content}</p>
			{content2 && <p>{content2}</p>}
		</div>
	)
}

export default SectionFooter
