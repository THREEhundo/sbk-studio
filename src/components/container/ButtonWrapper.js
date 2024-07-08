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
	const handleClick = () => console.log(`Clicked`)
	const handleClick1 = () => console.log(`Clicked1`)
	const handler = 'onClick' ? handleClick : handleClick1

	return (
		<Button
			onClick={handler}
			variant={variant}
			disabled={disabled}
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonWrapper
