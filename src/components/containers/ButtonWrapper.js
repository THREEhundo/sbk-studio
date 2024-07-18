'use client'

import React from 'react'
import Button from '../ui/Button'
import Link from 'next/link'

const ButtonWrapper = React.forwardRef(
	(
		{
			children,
			onClick,
			variant,
			size,
			disabled,
			className,
			href,
			...props
		},
		ref
	) => {
		const handleClick = e => {
			console.log(`Clicked: ${children}`)
			if (onClick) onClick(e)
		}

		const buttonElement = (
			<Button
				ref={ref}
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
					{React.cloneElement(buttonElement, {
						onClick: handleClick
					})}
				</Link>
			)
		}

		return buttonElement
	}
)

ButtonWrapper.displayName = 'ButtonWrapper'

export default ButtonWrapper
