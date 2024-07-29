import React from 'react'
import ButtonWrapper from './containers/ButtonWrapper'
import PortfolioListContainer from './containers/PortfolioListContainer'
import PricePackageContainer from './containers/PriceCardsContainer'
import Image from 'next/image'
import UpChevronSVG from './icons/UpChevronSVG'
import Section from './layout/Section'
import FeatureItem from './ui/FeatureItems'
import FolderIcon from './icons/FolderIcon'
import { shimmer, toBase64 } from './utils/utils'

/**
 * Main Component
 *
 * The main content of the homepage, including sections for services,
 * features, portfolio, and pricing.
 */
const Main = () => {
	return (
		<main className='bg-neutral text-primary-500'>
			<Section title="Crafting Digital Excellence for LA's Small Businesses">
				<div className='flex flex-col md:flex-row items-center md:space-x-8'>
					<div className='md:w-1/2 mb-8 md:mb-0'>
						<Image
							src='/images/og/diamond.png'
							width={2048}
							height={2048}
							alt='Rocket launching off of a laptop'
							className='rounded-lg shadow-lg'
							placeholder='blur'
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(640, 360)
							)}`}
						/>
					</div>
					<FolderIcon className='md:w-1/2 space-y-4 '>
						<p className='text-xl text-primary-100'>
							At SBK Studio, we don&apos;t just build websites—we
							engineer digital success stories for small
							businesses across Los Angeles and beyond. Our
							passion? Crafting custom-coded websites that leave
							template-based solutions in the dust.
						</p>
						<ButtonWrapper variant='primary' size='large'>
							Learn More
						</ButtonWrapper>
					</FolderIcon>
				</div>
			</Section>

			<Section
				title='Why Custom Code Crushes the Competition'
				className='bg-neutral-800'>
				<div className='flex flex-col md:flex-row items-center md:space-x-8 mb-12'>
					<div className='md:w-1/2 mb-8 md:mb-0'>
						<Image
							src='/images/og/glowing-balls.png'
							width={2048}
							height={2048}
							alt='Glowing translucent balls on a wet surface'
							className='rounded-lg shadow-lg'
							placeholder='blur'
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(640, 360)
							)}`}
						/>
					</div>
					<div className='md:w-1/2 space-y-4'>
						<p className='text-xl text-primary-100'>
							Forget cookie-cutter designs and sluggish page
							builders. Here&apos;s why our tailor-made websites
							are the secret weapon your business needs:
						</p>
						<ul className='space-y-6'>
							<FeatureItem
								title='Lightning Fast Loading'
								description='Every second counts in keeping customers engaged.'
							/>
							<FeatureItem
								title='Mobile-First Mastery'
								description='Captivate your audience on every device, every time.'
							/>
							<FeatureItem
								title='Responsive Perfection'
								description='Your site will look stunning from smartphones to desktops.'
							/>
						</ul>
					</div>
				</div>
			</Section>

			<Section title='Our Portfolio'>
				<PortfolioListContainer />
			</Section>

			<Section
				title='The Small Business Launchpad: $199/mo'
				className='bg-neutral-800 flex'>
				<div className='flex flex-col md:flex-row items-center md:space-x-8 mb-12'>
					<div className='md:w-1/2 mb-8 md:mb-0'>
						<p className='text-xl text-primary-100'>
							$199 /mo for a standard 5 page small business
							website. If you need more than that then we have to
							do custom pricing based on the scope of work.
						</p>
						<br />
						<p className='text-xl text-primary-100'>
							You own your domain, content, listing, and profiles.
							Cancel anytime with no fees or hassle.
						</p>
						<ul className='grid md:grid-cols-2 gap-4'>
							{[
								'5 Beautifully Crafted Pages',
								'SEO optimization',
								'Mobile-first Design',
								'Hosting Included',
								'24/7 Customer Support'
							].map((item, index) => (
								<li
									key={index}
									className='flex items-center space-x-3'>
									<UpChevronSVG className='flex-shrink-0 w-6 h-6 text-secondary-500' />
									<span className='text-lg text-primary-100'>
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
					<Image
						src='/images/og/blastoff.png'
						width={2464}
						height={1856}
						alt='Rocket launching off of a laptop'
						className='rounded-lg shadow-lg md:w-1/2 space-y-4'
						placeholder='blur'
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(640, 360)
						)}`}
					/>
				</div>
			</Section>

			<Section title='Our Pricing Plans'>
				<PricePackageContainer />
			</Section>
		</main>
	)
}

export default Main
