import React from 'react'
import UpChevronSVG from '../icons/UpChevronSVG'
import {
	BsFillLightningChargeFill,
	BsFillFileEarmarkCodeFill,
	BsCreditCardFill
} from 'react-icons/bs'
import { IoPhonePortrait, IoAccessibility } from 'react-icons/io5'
import {
	FaSearchDollar,
	FaServer,
	FaPencilRuler,
	FaGoogle
} from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { SiGooglemybusiness } from 'react-icons/si'
import { DiGoogleAnalytics } from 'react-icons/di'
import { LuServerCog } from 'react-icons/lu'
import { GiSpikyExplosion } from 'react-icons/gi'

const IconComponents = {
	BsFillLightningChargeFill,
	BsFillFileEarmarkCodeFill,
	BsCreditCardFill,
	IoPhonePortrait,
	IoAccessibility,
	FaSearchDollar,
	FaServer,
	FaPencilRuler,
	FaGoogle,
	GiSpikyExplosion,
	MdOutlineDesignServices,
	SiGooglemybusiness,
	DiGoogleAnalytics,
	LuServerCog,
	BsFillLightningChargeFill
}

const FeatureItem = ({ title, icon }) => {
	if (!title) {
		return null
	}

	const IconComponent = icon && IconComponents[icon]

	return (
		<li className='flex items-start space-x-3 mb-4'>
			{IconComponent ? (
				<IconComponent className='flex-shrink-0 w-6 h-6 text-secondary-500 mt-1' />
			) : (
				<div className='w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center'>
					<span className='text-neutral text-xs font-bold'>
						{title[0]}
					</span>
				</div>
			)}
			<div>
				<h3 className='text-xl font-semibold text-primary-500 mb-2'>
					{title}
				</h3>
			</div>
		</li>
	)
}

export default FeatureItem
