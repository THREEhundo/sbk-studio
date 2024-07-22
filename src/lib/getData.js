import fs from 'fs/promises'
import path from 'path'

const cache = {}

export async function getData(dataType) {
	if (cache[dataType]) {
		return cache[dataType]
	}

	const filePath = path.join(process.cwd(), 'data', `${dataType}.json`)
	try {
		const fileContents = await fs.readFile(filePath, 'utf8')
		const data = JSON.parse(fileContents)
		cache[dataType] = data
		return data
	} catch (error) {
		console.error(`Error fetching ${dataType} data:`, error)
		throw error // Propagate the error to be handled by the caller
	}
}
