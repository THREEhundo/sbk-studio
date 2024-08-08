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
		const flexClasses = `flex gap-4 flex-col`
		const gridClasses = `grid`

		const renderCardList = classes => {
			if (!cards) return null

			if (cards.some(item => item.type === 'IconCard')) {
				return (
					<IconCardsContainer>
						<CardList cards={cards} className={flexClasses} />
					</IconCardsContainer>
				)
			}

			if (cards.some(item => item.type === 'PriceCard')) {
				return (
					<CardList cards={cards} className={gridClasses} />
					//<PricePackageContainer>
					//</PricePackageContainer>
				)
			}

			if (cards.some(item => item.type === 'HoverCard')) {
				return <CardList cards={cards} />
			}

			return null
		}

		return (
			<section className='responsive-container pb-12'>
				<SectionHeader
					title={title}
					description={description}
					imgUrl={imgUrl}
					imageAlt={imageAlt}
					imageType={imageType}>
					{renderCardList(gridClasses)}
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
