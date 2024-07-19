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

/**
 * Types of section content
 * II
 * h2
 * content
 * h3 array
 *
 * 1
 * h2
 * content
 * h3 array [{h3,h4,content*}] just add a conditional statement and insert component for this
 *
 * I
 * h2
 * content
 *
 * III
 * h2
 * content
 * content2
 *
 * I
 * h2
 * content
 * h3 array
 * content
 *
 */

// TODO Create First Content Component
// TODO h2 p

// TODO Create Second Content Component by wrapping First component
// TODO h2 p h3 array of strings

// TODO Add conditional for extra content in the h3 array and create h3 array sub-component for that.
// TODO h2 p h3 array of objects (if objs) do this

// TODO Create Third Component wrapping Second Component
// TODO Add conditional for extra content AFTER the h3 string array

// TODO Create Fourth Content Component h2 + p + p
