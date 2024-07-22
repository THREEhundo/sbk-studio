import React from 'react'
import SectionHeader from './SectionHeader'
import CardList from './CardList'
import SectionFooter from './SectionFooter'
import PricePackageContainer from '../containers/PriceCardsContainer'
import IconCardsContainer from '../containers/IconCardsContainer'

const CardSection = React.memo(
	({ index, title, description, cards, footerContent, imgUrl, imageAlt }) => {
		const renderCardList = () => {
			if (!cards) return null

			if (cards.some(item => item.type === 'IconCard')) {
				return (
					<IconCardsContainer>
						<CardList cards={cards} />
					</IconCardsContainer>
				)
			}

			if (cards.some(item => item.type === 'PriceCard')) {
				return (
					<PricePackageContainer>
						<CardList cards={cards} />
					</PricePackageContainer>
				)
			}

			if (cards.some(item => item.type === 'HoverCard')) {
				return <CardList cards={cards} />
			}

			return null
		}

		return (
			<section className='responsive-container'>
				<SectionHeader
					title={title}
					description={description}
					imgUrl={imgUrl}
					imageAlt={imageAlt}>
					{renderCardList()}
				</SectionHeader>

				{footerContent && <SectionFooter content={footerContent} />}
			</section>
		)
	}
)

CardSection.displayName = 'CardSection'

export default CardSection
