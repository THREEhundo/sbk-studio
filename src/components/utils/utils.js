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
	console.log('Date String', dateString)
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
