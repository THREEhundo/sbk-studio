import React from 'react'
import Placeholder from './ui/Placeholder'
import ButtonWrapper from './containers/ButtonWrapper'

const Header = () => {
	return (
		<header>
			<h1>Web Design & Development for Small Business</h1>
			<Placeholder width={320} height={240} type='image' />
			<p>
				Transform your online presence with websites that preform as
				brilliantly as your business.
			</p>
			<ButtonWrapper onClick='handleClick' variant='primary' size='large'>
				Learn More
			</ButtonWrapper>
		</header>
	)
}

export default Header
