'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import ButtonWrapper from './ButtonWrapper'

const HoverRevealComponent = ({ title, description, button = false }) => {
	const containerRef = useRef(null)
	const contentRef = useRef(null)
	const titleRef = useRef(null)
	const buttonRef = useRef(null)
	const [initialHeight, setInitialHeight] = useState('auto')

	useEffect(() => {
		const container = containerRef.current
		const content = contentRef.current
		const title = titleRef.current
		const buttonElement = buttonRef.current

		const calculateInitialHeight = () => {
			const titleRect = title.getBoundingClientRect()
			const containerStyles = window.getComputedStyle(container)
			const titleStyles = window.getComputedStyle(title)

			const containerPaddingTop = parseFloat(containerStyles.paddingTop)
			const containerPaddingBottom = parseFloat(
				containerStyles.paddingBottom
			)

			const titlePaddingTop = parseFloat(titleStyles.paddingTop)
			const titlePaddingBottom = parseFloat(titleStyles.paddingBottom)

			// Calculate the total height
			const totalHeight =
				titleRect.height +
				containerPaddingTop +
				containerPaddingBottom +
				titlePaddingTop +
				titlePaddingBottom

			return totalHeight
		}

		const calculateExpandedHeight = () => {
			const containerStyles = window.getComputedStyle(container)
			const containerPaddingTop = parseFloat(containerStyles.paddingTop)
			const containerPaddingBottom = parseFloat(
				containerStyles.paddingBottom
			)
			const titleStyles = window.getComputedStyle(title)
			const titlePaddingBottom = parseFloat(titleStyles.paddingBottom)

			const contentHeight = content.offsetHeight
			const titleHeight = title.offsetHeight

			return (
				containerPaddingTop +
				titleHeight +
				titlePaddingBottom +
				contentHeight +
				containerPaddingBottom
			)
		}
		// Set initial height after a short delay to ensure proper rendering
		setTimeout(() => {
			const height = calculateInitialHeight()
			setInitialHeight(`${height}px`)
			gsap.set(container, { height: height, backgroundColor: '#1B1F27' })
			gsap.set(content, { yPercent: 100, opacity: 0 })
		}, 0)

		// Create timelines
		const expandTl = gsap.timeline({ paused: true })
		const collapseTl = gsap.timeline({ paused: true })

		// Expand animation
		expandTl
			.to(container, {
				duration: 0.5,
				height: calculateExpandedHeight,
				backgroundColor: '#8FFF85',
				backgroundImage:
					'linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)'
			})
			.to(title, { color: '#FFFFFF', duration: 0.3 }, 0)
			.to(content, { yPercent: 0, opacity: 1, duration: 0.3 }, 0.5)
			.to(
				buttonElement,
				{ color: '#aeff00', backgroundColor: '#1b1f27', duration: 0.3 },
				0.5
			)

		// Collapse animation
		collapseTl
			.to(content, { yPercent: 100, opacity: 0, duration: 0.3 })
			.to(title, { color: '#FFFFFF', duration: 0.3 }, 0.3)
			.to(
				container,
				{
					duration: 0.5,
					height: calculateInitialHeight,
					backgroundColor: '#1B1F27',
					backgroundImage: 'none'
				},
				0.3
			)
			.to(
				buttonElement,
				{ color: '', backgroundColor: '', duration: 0.3 },
				0.3
			)

		// Hover events
		const onEnter = () => {
			collapseTl.kill()
			expandTl.restart()
		}

		const onLeave = () => {
			expandTl.kill()
			collapseTl.restart()
		}

		container.addEventListener('mouseenter', onEnter)
		container.addEventListener('mouseleave', onLeave)

		// Cleanup
		return () => {
			container.removeEventListener('mouseenter', onEnter)
			container.removeEventListener('mouseleave', onLeave)
			expandTl.kill()
			collapseTl.kill()
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='w-full p-6 relative overflow-hidden rounded-lg hover-card'
			style={{ height: initialHeight }}>
			<h2 ref={titleRef} className='text-2xl font-bold text-primary-500'>
				{title}
			</h2>
			<div ref={contentRef} className='pt-6'>
				<p className='pb-6 text-neutral'>{description}</p>
				{button && (
					<ButtonWrapper
						ref={buttonRef}
						className='py-2 px-4 bg-neutral text-secondary-900-500 rounded hover:bg-primary-100 hover:text-neutral transition-colors duration-300'>
						Discover More
					</ButtonWrapper>
				)}
			</div>
		</div>
	)
}

export default HoverRevealComponent
