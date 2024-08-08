import React from 'react'
import SectionHeader from './SectionHeader'
import SectionFooter from './SectionFooter'

const CardSection = ({
	title,
	description,
	children,
	footerContent,
	content2,
	imgUrl,
	imageAlt
}) => {
	return (
		<section className='responsive-container pb-12'>
			<SectionHeader
				title={title}
				description={description}
				imgUrl={imgUrl}
				imageAlt={imageAlt}>
				{children}
			</SectionHeader>
			{footerContent && (
				<SectionFooter content={footerContent} content2={content2} />
			)}
		</section>
	)
}

export default CardSection
