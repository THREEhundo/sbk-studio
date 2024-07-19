import Layout from '@/components/Layout'
import Main from '@/components/Main'
import Metadata from '@/components/Metadata'
import Header from '@/components/layout/Header'
import CardSection from '@/components/ui/CardSection'
import SectionHeader from '@/components/ui/SectionHeader'
import UseScrollHandler from '@/components/utils/useScrollHandler'
import { getData } from '@/lib/getData'

export default async function Home() {
	const specificId =
		'Small Business Web Design & Development | Affordable Custom Websites'
	const file = `seo.json`
	const data = await getData(file)
	const homeObj = data.find(item => item.pageTitle === specificId)
	return (
		<>
			<Metadata title='SBK Studio' />
			<Layout>
				<UseScrollHandler />
				<Header specificId={specificId} dataSet={'homepage'} />
				{/*<Main />*/}
				{homeObj.sections.map((section, index) => (
					<CardSection
						key={index}
						title={section.h2}
						description={section.content}
						cards={section.h3s}
					/>
				))}
				{/* ON SECOND SECTION */}
			</Layout>
		</>
	)
}
