import { getData } from '@/lib/getData'
import React from 'react'
import Card from '../ui/Card'

const PortfolioListContainer = async () => {
	const projects = await getData('projects.json')

	return (
		<section
			id='portfolio'
			className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{projects.map(project => (
				<Card
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					image={project.image}
					featured={project.featured}
				/>
			))}
		</section>
	)
}

export default PortfolioListContainer
