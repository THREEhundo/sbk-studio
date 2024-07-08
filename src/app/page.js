import { getData } from '@/lib/getData'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Main from '@/components/Main'

export default function Home() {
	const projects = getData('projects.json')

	return (
		<Layout>
			<Header />
			<Main />
		</Layout>
	)
}
