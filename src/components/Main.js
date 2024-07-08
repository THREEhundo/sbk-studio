import React from 'react'
import Placeholder from './ui/Placeholder'
import ButtonWrapper from './containers/ButtonWrapper'
import PortfolioListContainer from './containers/PortfolioListContainer'
import PricePackageContainer from './containers/PricePackageContainer'

const Main = () => {
	return (
		<main>
			<section>
				<Placeholder width={320} height={240} type='image' />
				<h2>What We Do</h2>
				<p>
					At SBK Studio, we don&apos;t just build websites—we engineer
					digital success stories for small businesses across Los
					Angeles and beyond. Our passion? Crafting custom-coded
					websites that leave template-based solutions in the dust.
				</p>
			</section>
			<section>
				<Placeholder width={320} height={240} type='image' />
				<h2>Why Custom Code Crushes the Competition</h2>
				<p>
					Forget cookie-cutter designs and sluggish page builders.
					Here&apos;s why our tailor-made websites are the secret
					weapon your business needs
				</p>
				<ButtonWrapper>Learn More</ButtonWrapper>
			</section>
			<section>
				<ul>
					<li>
						<Placeholder width={25} height={25} type='icon' />
						<h3>Lightning Fast Loading</h3>
						<p>Every second counts in keeping customers engaged.</p>
					</li>
					<li>
						<Placeholder width={25} height={25} type='icon' />
						<h3>Mobile-First Mastery</h3>
						<p>
							Captivate your audience on every device, every time.
						</p>
					</li>
					<li>
						<Placeholder width={25} height={25} type='icon' />
						<h3>Responsive Perfection</h3>
						<p>
							Your site will look stunning from smartphones to
							desktops
						</p>
					</li>
				</ul>
			</section>
			<PortfolioListContainer />
			<section>
				<h2>The Small Business Launchpad: $199/mo</h2>
				<p>
					$199 /mo for a standard 5 page small business website. If
					you need more than that then we have to do custom pricing
					based on the scope of work.
				</p>
				<p>
					You own your domain, content, listing, and profiles. Cancel
					anytime with no fees or hassle.
				</p>
				<section>
					<ul>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>5 Beautifully Crafted Pages</h3>
						</li>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>Full on-page SEO optimization</h3>
						</li>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>Mobile-first Design</h3>
						</li>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>Hosting Included</h3>
						</li>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>24/7 Customer Support</h3>
						</li>
					</ul>
				</section>
			</section>
			<PricePackageContainer />
		</main>
	)
}

export default Main
