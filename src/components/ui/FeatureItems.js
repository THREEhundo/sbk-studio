import React from 'react'
import UpChevronSVG from '../icons/UpChevronSVG'

/**
 * FeatureItem Component
 *
 * Displays a single feature with an icon, title, and description.
 *
 * @param {string} title - The title of the feature
 * @param {string} description - The description of the feature
 */
const FeatureItem = ({ title, description }) => (
	<li className='flex items-start space-x-3 mb-4'>
		<UpChevronSVG className='flex-shrink-0 w-6 h-6 text-secondary-500 mt-1' />
		<div>
			<h3 className='text-xl font-semibold text-primary-500 mb-2'>
				{title}
			</h3>
			<p className='text-primary-100'>{description}</p>
		</div>
	</li>
)

export default FeatureItem
