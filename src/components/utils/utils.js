export const formatDate = dateString => {
	if (!dateString) return 'Date unknown'

	const date = new Date(dateString)
	if (isNaN(date.getTime())) return 'Invalid date'

	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

export const truncateText = (text, maxLength) => {
	if (text.length <= maxLength) return text
	return text.substr(0, maxLength) + '...'
}

export const capitalize = string =>
	string.charAt(0).toUpperCase() + string.slice(1)

export const convertToISOString = dateString => {
	// Split the date string into components
	const [month, day, year] = dateString.split('/')

	// Create a new Date object
	// Note: We assume the year is in the 21st century, so we add 2000 to it
	const date = new Date(
		parseInt(year) + 2000,
		parseInt(month) - 1,
		parseInt(day)
	)

	// Convert to ISO string
	return date.toISOString()
}

export const calculateReadingTime = content => {
	const countWordsInString = str => str.split(/\s+/).length

	const countWordsInContent = item => {
		if (typeof item === 'string') {
			return countWordsInString(item)
		}
		if (Array.isArray(item)) {
			return item.reduce(
				(sum, element) => sum + countWordsInContent(element),
				0
			)
		}
		if (typeof item === 'object' && item !== null) {
			let count = 0
			if (item.content) {
				count += countWordsInContent(item.content)
			}
			if (item.key_takeaways) {
				count += countWordsInContent(item.key_takeaways)
			}
			if (item.section_title) {
				count += countWordsInString(item.section_title)
			}
			return count
		}
		return 0
	}

	const totalWords = countWordsInContent(content)
	return Math.ceil(totalWords / 200)
}

export const isMp4 = filename => {
	return (
		typeof filename === 'string' && filename.toLowerCase().endsWith('.mp4')
	)
}

export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const toBase64 = str =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)
