'use client'
import React from 'react'
import Button from '../ui/Button'

const ButtonWrapper = ({
	children,
	onClick,
	variant,
	size,
	disabled,
	className,
	...props
}) => {
	const handleClick = () => {
		console.log(`Clicked: ${children}`)
		if (onClick) onClick()
	}

	return (
		<Button
			onClick={handleClick}
			variant={variant}
			size={size}
			disabled={disabled}
			className={className}
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonWrapper
