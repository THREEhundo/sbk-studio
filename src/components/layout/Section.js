import React from 'react'

/**
 * Section Component
 *
 * A reusable section component with consistent styling.
 *
 * @param {string} title - The title of the section
 * @param {React.ReactNode} children - The content of the section
 * @param {string} className - Additional CSS classes (optional)
 */
const Section = ({ title, children, className = '' }) => (
	<section className={`py-16 ${className}`}>
		<div className='responsive-container px-4'>
			<h2 className='text-3xl md:text-4xl font-bold text-primary-500'>
				{title}
			</h2>
			{children}
		</div>
	</section>
)

export default Section
