import Image from 'next/image'
import { getData } from '@/lib/getData'
import Placeholder from '@/components/ui/Placeholder'

export default function Home() {
	const projects = getData('projects.json')

	return (
		<div className='container mx-auto px-4'>
			<header>
				<nav>
					<ul>
						<li>
							<a href='/'>
								<Placeholder
									width={100}
									height={40}
									type='icon'
								/>
							</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
						<li>
							<a href='/services'>Services</a>
						</li>
						<li>
							<a href='/blog'>Blog</a>
						</li>
					</ul>
				</nav>
				<h1>Web Design & Development for Small Business</h1>
				<Placeholder width={320} height={240} type='image' />
			</header>
		</div>
	)
}
