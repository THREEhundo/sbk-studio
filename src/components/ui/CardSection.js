import React from 'react'
import SectionHeader from './SectionHeader'
import CardList from './CardList'
import SectionFooter from './SectionFooter'
import PricePackageContainer from '../containers/PriceCardsContainer'
import IconCardsContainer from '../containers/IconCardsContainer'

const CardSection = React.memo(
	({
		title,
		description,
		cards,
		content2,
		footerContent,
		imgUrl,
		imageAlt,
		imageType
	}) => {
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
			<section className='responsive-container grid'>
				<SectionHeader
					title={title}
					description={description}
					imgUrl={imgUrl}
					imageAlt={imageAlt}
					imageType={imageType}>
					{renderCardList()}
				</SectionHeader>

				{footerContent && (
					<SectionFooter
						content={footerContent}
						content2={content2}
					/>
				)}
			</section>
		)
	}
)

CardSection.displayName = 'CardSection'

export default CardSection
