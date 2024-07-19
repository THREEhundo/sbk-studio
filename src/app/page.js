import Layout from '@/components/Layout'
import Main from '@/components/Main'
import Metadata from '@/components/Metadata'
import Header from '@/components/layout/Header'
import UseScrollHandler from '@/components/utils/useScrollHandler'

export default function Home() {
	const specificId =
		'Small Business Web Design & Development | Affordable Custom Websites'
	return (
		<>
			<Metadata title='SBK Studio' />
			<Layout>
				<UseScrollHandler />
				<Header specificId={specificId} dataSet={'homepage'} />
				<Main />
			</Layout>
		</>
	)
}
