'use client'

import React from 'react'

const Button = ({
	children,
	onClick,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	className = '',
	...props
}) => {
	const baseStyles =
		'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
	const variants = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
		secondary:
			'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
		danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
	}
	const sizes = {
		small: 'px-3 py-2 text-sm',
		medium: 'px-4 py-2 text-base',
		large: 'px-6 py-3 text-lg'
	}

	const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim()

	return (
		<button
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	)
}

export default Button