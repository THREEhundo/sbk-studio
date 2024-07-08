import fs from 'fs'
import path from 'path'

// Reads JSON files
export function getData(fileName) {
	const filePath = path.join(process.cwd(), 'data', fileName)
	const fileContents = fs.readFileSync(filePath, 'utf8')
	return JSON.parse(fileContents)
}
