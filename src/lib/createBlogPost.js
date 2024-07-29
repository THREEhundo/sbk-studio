// SSR vs Client Side rendering issue.
// terminal shows reading time.
// browser is showing undefined
// Typically a serialization issue, where getters and methods are not properly transferred from server to client.
// When Next.js performs server-side rendering, it needs to serialize the component props to send them to the client. During this process, getters and methods are typically lost.
// createBlogPost.js

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
	console.log(`Creating blog post object for id: ${id}`)

	// Parse the date, providing a fallback if it's invalid
	const date = new Date(publishDate)
	const validDate = !isNaN(date.getTime()) ? date : new Date()

	const formatContent = content => {
		console.log(
			`Formatting content for post ${id}. Content type:`,
			typeof content
		)
		if (typeof content === 'string') {
			return content
		}
		if (Array.isArray(content)) {
			console.log(`Content is an array with ${content.length} items`)
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
                      ${keyTakeaways
							.map(takeaway => `<li>${takeaway}</li>`)
							.join('')}
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
		console.warn(`Unexpected content type for post ${id}:`, typeof content)
		return ''
	}

	const formattedContent = formatContent(content)
	console.log(
		`Formatted content length for post ${id}:`,
		formattedContent.length
	)

	const blogPost = {
		id,
		title,
		content: formattedContent,
		author,
		authorImageUrl,
		publishDate: validDate,
		tags: Array.isArray(tags) ? tags : [],
		image: image || null,
		altTag: altTag || '',
		get formatDate() {
			return this.publishDate.toLocaleDateString('en-US', {
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
		hasTag(tag) {
			return this.tags.includes(tag)
		},
		toJSON() {
			return {
				id: this.id,
				title: this.title,
				excerpt: this.excerpt,
				author: this.author,
				authorImageUrl: this.authorImageUrl,
				publishDate: this.publishDate,
				tags: this.tags,
				image: this.image,
				altTag: this.altTag
			}
		}
	}

	console.log(`Created blog post object for id ${id}:`, blogPost.toJSON())

	return blogPost
}

export default createBlogPost
