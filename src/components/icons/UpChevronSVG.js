import React from 'react'

const UpChevronSVG = ({
	stroke = '#AEFF00',
	fill = 'none',
	width = 16,
	height = 16,
	className = '',
	...props
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={fill}
			stroke={stroke}
			viewBox='0 0 16 16'
			width={width}
			height={height}
			className={className}
			{...props}>
			<desc>Up Chevron Streamline Icon: https://streamlinehq.com</desc>
			<path
				fill={stroke}
				fillRule='evenodd'
				d='M14.9999 6.99986v9.00004L7.99987 8.99989 1.00012 15.9999l0 -9.00004L7.99987 -0.00012207 14.9999 6.99986Z'
				clipRule='evenodd'
				strokeWidth='1'
			/>
		</svg>
	)
}

export default UpChevronSVG
