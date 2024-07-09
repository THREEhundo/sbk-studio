import { getData } from '@/lib/getData'
import React from 'react'
import Card from '../ui/Card'

const PortfolioListContainer = async () => {
	const projects = await getData('projects.json')

	return (
		<section id='portfolio'>
			{projects.map(project => (
				<Card
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					image=''
					featured={project.featured}
				/>
			))}
		</section>
	)
}

export default PortfolioListContainer
