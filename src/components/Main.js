import React from 'react'
import Placeholder from './ui/Placeholder'
import ButtonWrapper from './containers/ButtonWrapper'
import PortfolioListContainer from './containers/PortfolioListContainer'
import PricePackageContainer from './containers/PricePackageContainer'

const Main = () => {
	return (
		<main className='px-4 md:px-8 py-8 md:py-12 space-y-12 md:space-y-24 bg-neutral text-primary-500'>
			<section className='space-y-4 md:space-y-0 md:flex md:items-center md:space-x-8 md:flex-row-reverse'>
				<div className='md:w-1/2'>
					<Placeholder
						width={320}
						height={240}
						type='image'
						className='w-full h-auto rounded-lg shadow-md'
					/>
				</div>
				<div className='md:w-1/2 space-y-4'>
					<h2 className='text-2xl md:text-3xl font-bold font-hubot'>
						What We Do
					</h2>
					<p className='text-lg md:text-xl'>
						At SBK Studio, we don&apos;t just build websites—we
						engineer digital success stories for small businesses
						across Los Angeles and beyond. Our passion? Crafting
						custom-coded websites that leave template-based
						solutions in the dust.
					</p>
				</div>
			</section>

			<section className='space-y-6 md:space-y-8'>
				<div className='md:flex md:items-center md:space-x-8'>
					<Placeholder
						width={320}
						height={240}
						type='image'
						className='w-full md:w-1/2 h-auto rounded-lg shadow-md'
					/>
					<div className='md:w-1/2 space-y-4 md:space-y-6'>
						<h2 className='text-2xl md:text-3xl font-bold font-hubot'>
							Why Custom Code Crushes the Competition
						</h2>
						<p className='text-lg md:text-xl'>
							Forget cookie-cutter designs and sluggish page
							builders. Here&apos;s why our tailor-made websites
							are the secret weapon your business needs
						</p>
						<ButtonWrapper className='w-full md:w-auto text-center py-3 px-6 bg-secondary-500 text-neutral rounded-lg hover:bg-secondary-900 transition-colors duration-300'>
							Learn More
						</ButtonWrapper>
					</div>
				</div>
				<ul className='space-y-6 mt-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0'>
					{[
						{
							title: 'Lightning Fast Loading',
							description:
								'Every second counts in keeping customers engaged.'
						},
						{
							title: 'Mobile-First Mastery',
							description:
								'Captivate your audience on every device, every time.'
						},
						{
							title: 'Responsive Perfection',
							description:
								'Your site will look stunning from smartphones to desktops'
						}
					].map((item, index) => (
						<li
							key={index}
							className='flex md:flex-col items-start md:items-center space-x-4 md:space-x-0 md:space-y-4'>
							<Placeholder
								width={25}
								height={25}
								type='icon'
								className='flex-shrink-0 mt-1 md:mt-0'
							/>
							<div className='md:text-center'>
								<h3 className='text-xl font-semibold font-hubot'>
									{item.title}
								</h3>
								<p className='mt-2'>{item.description}</p>
							</div>
						</li>
					))}
				</ul>
			</section>

			<PortfolioListContainer />

			<section className='space-y-6 md:space-y-8'>
				<h2 className='text-2xl md:text-3xl font-bold font-hubot'>
					The Small Business Launchpad: $199/mo
				</h2>
				<div className='space-y-4 md:space-y-6'>
					<p className='text-lg md:text-xl'>
						$199 /mo for a standard 5 page small business website.
						If you need more than that then we have to do custom
						pricing based on the scope of work.
					</p>
					<p className='text-lg md:text-xl'>
						You own your domain, content, listing, and profiles.
						Cancel anytime with no fees or hassle.
					</p>
				</div>
				<ul className='space-y-4 mt-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0'>
					{[
						'5 Beautifully Crafted Pages',
						'Full on-page SEO optimization',
						'Mobile-first Design',
						'Hosting Included',
						'24/7 Customer Support'
					].map((item, index) => (
						<li key={index} className='flex items-center space-x-3'>
							<Placeholder
								width={25}
								height={25}
								type='icon'
								className='flex-shrink-0'
							/>
							<span className='text-lg'>{item}</span>
						</li>
					))}
				</ul>
			</section>

			<PricePackageContainer />
		</main>
	)
}

export default Main
