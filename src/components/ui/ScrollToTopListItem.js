'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const ScrollToTopListItem = () => {
	const imageRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin)

		const handleScroll = () => {
			const scrollPosition = window.scrollY
			gsap.to(imageRef.current, {
				opacity: scrollPosition > 100 ? 1 : 0,
				duration: 0.3
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		gsap.to(window, {
			duration: 1,
			scrollTo: 0,
			ease: 'power2.inOut'
		})
	}

	return (
		<Image
			ref={imageRef}
			src='/icons/caret-up-bold.svg'
			width={24}
			height={24}
			alt='Scroll to top'
			onClick={scrollToTop}
			className='cursor-pointer focus:outline-none hover:opacity-80 transition-opacity opacity-0'
			tabIndex={0}
			onKeyPress={e => {
				if (e.key === 'Enter') scrollToTop()
			}}
			blurDataURL={`data:image/svg+xml;base64,${toBase64(
				shimmer(24, 24)
			)}`}
		/>
	)
}

export default ScrollToTopListItem
