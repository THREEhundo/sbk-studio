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
		primary:
			'bg-secondary-500 text-neutral hover:bg-secondary-900 focus:ring-secondary-500',
		secondary:
			'bg-primary-100 text-neutral hover:bg-primary-500 focus:ring-primary-500',
		danger: 'bg-danger text-neutral hover:bg-opacity-90 focus:ring-danger',
		gradient:
			'bg-fresh-breeze text-neutral hover:bg-secondary-900 focus:ring-secondary-500'
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
