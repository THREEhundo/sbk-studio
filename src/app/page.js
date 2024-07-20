import Layout from '@/components/Layout'
import Main from '@/components/Main'
import Header from '@/components/layout/Header'
import CardSection from '@/components/ui/CardSection'
import SectionHeader from '@/components/ui/SectionHeader'
import UseScrollHandler from '@/components/utils/useScrollHandler'
import { getData } from '@/lib/getData'

export const metadata = {
	title: 'SBK STUDIO | Small Business Web Design & Development | Affordable Custom Websites',
	description:
		'Custom web design and development services tailored for small businesses. Affordable packages with lightning-fast, mobile-friendly, SEO-optimized websites starting at $199/mo.'
}

export default async function Home() {
	const specificId =
		'Small Business Web Design & Development | Affordable Custom Websites'
	const file = `seo.json`
	const data = await getData(file)
	const homeObj = data.find(item => item.pageTitle === specificId)
	return (
		<>
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
						imgUrl={section.image}
						imageAlt={section.imageAlt}
					/>
				))}
				{/* ON SECOND SECTION */}
			</Layout>
		</>
	)
}
