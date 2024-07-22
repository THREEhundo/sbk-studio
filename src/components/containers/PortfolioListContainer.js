import Card from '../ui/Card'

const PortfolioListContainer = async ({ portfolioData }) => {
	return (
		<section
			id='portfolio'
			className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 responsive-container'>
			{portfolioData.map(project => (
				<Card
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					image={project.image}
					alt={project.alt}
					featured={project.featured}
					className='flex flex-col justify-between min-h-64'
				/>
			))}
		</section>
	)
}

export default PortfolioListContainer
