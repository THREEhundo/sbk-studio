import { getData } from './serverUtils'

export function createGetStaticProps(
	dataTypes,
	transform = data => ({ data })
) {
	return async () => {
		try {
			if (typeof dataTypes === 'string') {
				const data = await getData(dataTypes)
				return {
					props: transform(data),
					revalidate: 60
				}
			} else if (Array.isArray(dataTypes)) {
				const dataPromises = dataTypes.map(type => getData(type))
				const dataArray = await Promise.all(dataPromises)
				const combinedData = dataTypes.reduce((acc, type, index) => {
					acc[type] = dataArray[index]
					return acc
				}, {})
				return {
					props: transform(combinedData),
					revalidate: 60
				}
			}
		} catch (error) {
			console.error(`Error fetching data:`, error)
			return { notFound: true }
		}
	}
}
