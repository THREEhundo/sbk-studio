'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const UseScrollHandler = () => {
	const searchParams = useSearchParams()

	useEffect(() => {
		const sectionId = searchParams.get('section')
		if (sectionId) {
			const element = document.getElementById(sectionId)
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ 'behavior': 'smooth' })
				}, 100)
			}
		}
	}, [searchParams])

	return null
}

export default UseScrollHandler
