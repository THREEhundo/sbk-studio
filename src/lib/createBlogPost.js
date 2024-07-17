import React from 'react'

const createBlogPost = (
	id,
	title,
	content,
	author,
	publishDate,
	tags = [],
	authorImageUrl = null,
	image = null,
	altTag = ''
) => {
	// Parse the date, providing a fallback if it's invalid
	const date = new Date(publishDate)
	const validDate = !isNaN(date.getTime()) ? date : new Date()

	const formatContent = content => {
		if (typeof content === 'string') {
			return content
		}
		if (Array.isArray(content)) {
			return content
				.map((section, index) => {
					if (index === 0) {
						// First object: section title and key takeaways
						const keyTakeaways = Array.isArray(section.keyTakeaways)
							? section.keyTakeaways
							: []
						return `
            <h2>${section.sectionTitle || 'Introduction'}</h2>
            ${
				keyTakeaways.length > 0
					? `
              <h3>Key Takeaways:</h3>
              <ul>
                ${keyTakeaways.map(takeaway => `<li>${takeaway}</li>`).join('')}
              </ul>
            `
					: ''
			}
          `
					} else {
						return `
            <h2>${section.sectionTitle || `Section ${index}`}</h2>
            <p>${section.content || ''}</p>
          `
					}
				})
				.join('')
		}
		return ''
	}

	return {
		id,
		title,
		content: formatContent(content),
		author,
		authorImageUrl,
		publishDate: validDate,
		tags: Array.isArray(tags) ? tags : [],
		image: image || null, // Ensure image is null if falsy
		altTag: altTag || '', // Ensure altTag is an empty string if falsy
		get formatDate() {
			return date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		},
		get excerpt() {
			const stripHtml = html =>
				typeof html === 'string' ? html.replace(/<[^>]+>/g, '') : ''
			const plainText = stripHtml(this.content)
			return plainText.length > 150
				? plainText.substring(0, 150) + '...'
				: plainText
		},
		get readingTime() {
			const wordsPerMinute = 200
			const stripHtml = html =>
				typeof html === 'string' ? html.replace(/<[^>]+>/g, '') : ''
			const plainText = stripHtml(this.content)
			const wordCount = plainText.split(/\s+/).length
			return Math.ceil(wordCount / wordsPerMinute)
		},
		hasTag(tag) {
			return tags.includes(tag)
		},
		toJSON() {
			return {
				id: this.id,
				title: this.title,
				excerpt: this.excerpt,
				author: this.author,
				authorImageUrl: this.authorImageUrl,
				publishDate: date,
				readingTime: this.readingTime,
				tags: this.tags,
				image: this.image,
				altTag: this.altTag
			}
		}
	}
}

export default createBlogPost
