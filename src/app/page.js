import Layout from '@/components/Layout'
import Main from '@/components/Main'
import Header from '@/components/layout/Header'
import UseScrollHandler from '@/components/utils/useScrollHandler'

export default function Home() {
	return (
		<Layout>
			<UseScrollHandler />
			<Header dataSet={'homepage'} isHomepage={true} />
			<Main />
		</Layout>
	)
}
