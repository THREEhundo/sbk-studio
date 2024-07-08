// API route that configures & sends a placeholder SVG
export default function handler(req, res) {
	console.log('Received request for size:', req.query.size)
	const { size } = req.query
	const [width, height] = size.split('x').map(Number)

	if (isNaN(width) || isNaN(height)) {
		console.log('Invalid size parameter:', size)
		return res.status(400).send('Invalid size parameter')
	}

	const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#CCCCCC"/>
      <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#333333" text-anchor="middle" dy=".3em">${width}x${height}</text>
    </svg>
  `

	res.setHeader('Content-Type', 'image/svg+xml')
	res.status(200).send(svg)
}
