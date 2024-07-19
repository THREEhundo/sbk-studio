import React from 'react'
import SectionHeader from './SectionHeader'
import CardList from './CardList'
import SectionFooter from './SectionFooter'

const CardSection = ({ title, description, cards, footerContent }) => {
	return (
		<section>
			<SectionHeader title={title} description={description} />
			{cards && <CardList cards={cards} />}
			{footerContent && <SectionFooter content={footerContent} />}
		</section>
	)
}

export default CardSection
