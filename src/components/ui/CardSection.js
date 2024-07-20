import React from 'react'
import SectionHeader from './SectionHeader'
import CardList from './CardList'
import SectionFooter from './SectionFooter'
import PricePackageContainer from '../containers/PriceCardsContainer'

const CardSection = ({ title, description, cards, footerContent }) => {
	return (
		<section>
			<SectionHeader title={title} description={description} />
			{cards && cards.some(item => item.type === 'PriceCard') ? (
				<PricePackageContainer>
					<CardList cards={cards} />
				</PricePackageContainer>
			) : cards ? (
				<CardList cards={cards} />
			) : (
				''
			)}
			{footerContent && <SectionFooter content={footerContent} />}
		</section>
	)
}

export default CardSection
