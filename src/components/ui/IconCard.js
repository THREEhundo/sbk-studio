import React from 'react'
import Image from 'next/image'
import { shimmer, toBase64 } from '../utils/utils'

const IconCard = ({ id, title, description, icon }) => {
	return (
		<div id={id} className={`flex gap-4`}>
			{icon ? (
				<div className='flex-shrink-0 w-[50px] h-[50px]'>
					<Image
						key={id}
						src={icon}
						width={50}
						height={50}
						alt={title}
						className='text-secondary-500'
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(50, 50)
						)}`}
					/>
				</div>
			) : (
				<div
					key={id}
					className='w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center'>
					<span className='text-neutral text-xl font-bold'>
						{title[0]}
					</span>
				</div>
			)}
			<h3 className='text-xl font-semibold text-primary-500 mb-2'>
				{title}
			</h3>
			{description ?? <p className='text-primary-100'>{description}</p>}
		</div>
	)
}

export default IconCard
