import Image from 'next/image'
import { getData } from '@/lib/getData'
import Placeholder from '@/components/ui/Placeholder'
import { Nav } from '@/components/ui/Nav'
import ButtonWrapper from '@/components/container/ButtonWrapper'

export default function Home() {
	const projects = getData('projects.json')

	return (
		<div className='container mx-auto px-4'>
			<Nav />
			<header>
				<h1>Web Design & Development for Small Business</h1>
				<Placeholder width={320} height={240} type='image' />
				<p>
					Transform your online presence with websites that preform as
					brilliantly as your business.
				</p>
				<ButtonWrapper
					onClick='handleClick'
					variant='primary'
					size='large'>
					Learn More
				</ButtonWrapper>
			</header>
		</div>
	)
}
