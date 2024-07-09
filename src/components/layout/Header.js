import { getData } from '@/lib/getData'
import React from 'react'
import Placeholder from '../ui/Placeholder'
import ButtonWrapper from '../containers/ButtonWrapper'

const Header = async ({ dataSet, isHomepage = false }) => {
	const file = `${dataSet}.json`
	const data = await getData(file)

	// Check if data exists and has at least one object
	if (!data || data.length === 0) {
		return <header>No data available</header>
	}

	// Get the first object
	const firstObject = data[0]

	return (
		<header>
			<h1>{firstObject.title}</h1>
			<Placeholder width={320} height={240} type='image' />
			<p>{firstObject.description}</p>
			{isHomepage && (
				<ButtonWrapper
					onClick='handleClick'
					variant='primary'
					size='large'>
					Learn More
				</ButtonWrapper>
			)}
		</header>
	)
}

export default Header
