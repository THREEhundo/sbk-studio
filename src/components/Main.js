import React from 'react'
import Placeholder from './ui/Placeholder'
import ButtonWrapper from './containers/ButtonWrapper'

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
				<section>
					<ul>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>Lightning Fast Loading</h3>
							<p>
								Every second counts in keeping customers
								engaged.
							</p>
						</li>
						<li>
							<Placeholder width={25} height={25} type='icon' />
							<h3>Mobile-First Mastery</h3>
							<p>
								Captivate your audience on every device, every
								time.
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
			</section>
		</main>
	)
}

export default Main
