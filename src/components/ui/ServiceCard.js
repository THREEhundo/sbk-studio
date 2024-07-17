// Component: ServiceCard
// Purpose: Displays individual service information in a card format
// Location: Consider moving to /src/components/ui/ServiceCard.js if reused elsewhere
const ServiceCard = ({ title, description, icon }) => (
	<div className='bg-neutral-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
		<div className='text-secondary-500 w-12 h-12 mb-4'>{icon}</div>
		<h3 className='text-xl font-semibold text-primary-500 mb-2'>{title}</h3>
		<p className='text-primary-100'>{description}</p>
	</div>
)

export default ServiceCard
