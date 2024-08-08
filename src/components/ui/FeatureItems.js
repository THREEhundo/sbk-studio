import React from 'react'
import UpChevronSVG from '../icons/UpChevronSVG'

const FeatureItem = ({ title }) => {
	if (!title) {
		return null
	}

	return (
		<li className='flex items-start space-x-3 mb-4'>
			<UpChevronSVG className='flex-shrink-0 w-6 h-6 text-secondary-500 mt-1' />
			<div>
				<h3 className='text-xl font-semibold text-primary-500 mb-2'>
					{title}
				</h3>
			</div>
		</li>
	)
}

export default FeatureItem
