export const formatDate = date => {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(new Date(date))
}

export const truncateText = (text, maxLength) => {
	if (text.length <= maxLength) return text
	return text.substr(0, maxLength) + '...'
}

export const capitalize = string =>
	string.charAt(0).toUpperCase() + string.slice(1)
