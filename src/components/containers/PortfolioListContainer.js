import Card from '../ui/Card'

const PortfolioListContainer = async ({ portfolioData }) => {
	return (
		<section
			id='portfolio'
			className='grid md:grid-cols-2 gap-6 responsive-container pb-12'>
			{portfolioData.map(project => (
				<Card
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					image={project.image}
					alt={project.alt}
					featured={project.featured}
					className='flex flex-col h-full'
				/>
			))}
		</section>
	)
}

export default PortfolioListContainer
