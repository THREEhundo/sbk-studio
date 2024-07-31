'use client'

import { useState, useEffect } from 'react'

const useConnectionQuality = () => {
	const [quality, setQuality] = useState(75)

	useEffect(() => {
		console.log('useConnectionQuality hook mounted')
		const updateQuality = () => {
			console.log('Updating connection quality')

			if (
				'connection' in navigator &&
				'downlink' in navigator.connection
			) {
				const { downlink, rtt } = navigator.connection
				console.log(`Downlink: ${downlink}Mbps, RTT: ${rtt}ms`)

				// High-speed connection (e.g., fast broadband, 5G)
				if (downlink > 10 && rtt < 50) {
					setQuality(100)
				}
				// Good connection (e.g., 4G, average broadband)
				else if (downlink > 5 && rtt < 100) {
					setQuality(85)
				}
				// Average connection (e.g., 3G, slow broadband)
				else if (downlink > 2 && rtt < 200) {
					setQuality(75)
				}
				// Slow connection
				else {
					setQuality(60)
				}
			} else {
				// Fallback if Network Information API is not supported
				setQuality(75)
				console.log('Network Information API not supported')
			}
		}

		updateQuality()

		// Check if the browser supports the Network Information API
		if (
			'connection' in navigator &&
			'addEventListener' in navigator.connection
		) {
			navigator.connection.addEventListener('change', updateQuality)
			return () =>
				navigator.connection.removeEventListener(
					'change',
					updateQuality
				)
		}
	}, [])

	console.log(`Current quality setting: ${quality}`)

	return quality
}

export default useConnectionQuality
