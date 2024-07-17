'use client'
import React from 'react'
import Button from '../ui/Button'
import Link from 'next/link'

const ButtonWrapper = ({
	children,
	onClick,
	variant,
	size,
	disabled,
	className,
	href,
	...props
}) => {
	const handleClick = () => {
		console.log(`Clicked: ${children}`)
		if (onClick) onClick(e)
	}

	const buttonElement = (
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

	if (href) {
		return (
			<Link href={href} passHref legacyBehavior>
				{buttonElement}
			</Link>
		)
	}

	return buttonElement
}

export default ButtonWrapper
