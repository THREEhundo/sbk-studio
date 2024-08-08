import React from 'react'
import {
	BsFillLightningChargeFill,
	BsFillFileEarmarkCodeFill
} from 'react-icons/bs'
import { IoPhonePortrait, IoAccessibility } from 'react-icons/io5'
import {
	FaSearchDollar,
	FaServer,
	FaPencilRuler,
	FaGoogle
} from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'

const IconComponents = {
	BsFillLightningChargeFill,
	IoPhonePortrait,
	IoAccessibility,
	FaSearchDollar,
	BsFillFileEarmarkCodeFill,
	MdOutlineDesignServices,
	FaServer,
	FaPencilRuler,
	FaGoogle
}

const IconCard = ({ title, description, icon }) => {
	const IconComponent = icon && IconComponents[icon.name]

	return (
		<div className={`flex gap-4`}>
			<div className='flex-shrink-0 w-[50px] h-[50px] text-secondary-500'>
				{IconComponent ? (
					<IconComponent size={50} />
				) : (
					<div className='w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center'>
						<span className='text-neutral text-xl font-bold'>
							{title[0]}
						</span>
					</div>
				)}
			</div>
			<div>
				<h3 className='text-xl font-semibold text-primary-500 mb-2'>
					{title}
				</h3>
				{description && (
					<p className='text-primary-100'>{description}</p>
				)}
			</div>
		</div>
	)
}

export default IconCard
