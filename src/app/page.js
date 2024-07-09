import Layout from '@/components/Layout'
import Main from '@/components/Main'
import Header from '@/components/layout/Header'

export default function Home() {
	return (
		<Layout>
			<Header dataSet={'homepage'} isHomepage={true} />
			<Main />
		</Layout>
	)
}
