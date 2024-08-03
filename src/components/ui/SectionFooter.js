import React from 'react'

const SectionFooter = ({ content, content2 }) => {
	return (
		<div className=' mx-auto max-w-[500px]'>
			<p className='mb-4'>{content}</p>
			{content2 && <p className='mb-4'>{content2}</p>}
		</div>
	)
}

export default SectionFooter
