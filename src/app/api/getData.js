import { getData } from '../lib/serverUtils'
export default async function handler(req, res) {
	const { fileName } = req.query
	try {
		const data = await getData(fileName)
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Error fetching data' })
	}
}
