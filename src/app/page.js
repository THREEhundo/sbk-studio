import { Suspense } from 'react'
import Layout from '@/components/Layout'
import UseScrollHandler from '@/components/utils/useScrollHandler'
import Header from '@/components/layout/Header'
import CardSection from '@/components/ui/CardSection'
import { notFound } from 'next/navigation'
import { getPageData } from '@/lib/pageData'

export async function generateMetadata() {
	const data = await getPageData()
	const homeObj = data.find(
		item =>
			item.pageTitle ===
			'Small Business Web Design & Development | Affordable Custom Websites'
	)

	if (!homeObj) {
		return {
			title: 'Home',
			description: 'Default description'
		}
	}

	return {
		title: homeObj.pageTitle,
		description: homeObj.metaDescription
	}
}

async function HomeContent() {
	const data = await getPageData()
	const homeObj = data.find(
		item =>
			item.pageTitle ===
			'Small Business Web Design & Development | Affordable Custom Websites'
	)

	if (!homeObj) {
		notFound()
	}
	console.log(
		data,
		`DATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATADATA`
	)

	return (
		<>
			<Header
				specificId={`'Small Business Web Design & Development | Affordable Custom Websites'`}
				heroData={homeObj}
			/>
			{homeObj.sections.map((section, index) => (
				<CardSection
					key={index}
					index={index}
					title={section.h2}
					description={section.content}
					cards={section.h3s || []}
					imgUrl={section.image || '/path/to/default/image.jpg'}
					imageAlt={section.imageAlt || 'Default alt text'}
				/>
			))}
		</>
	)
}

export default function Home() {
	return (
		<Layout>
			<UseScrollHandler />
			<Suspense fallback={<div>Loading...</div>}>
				<HomeContent />
			</Suspense>
		</Layout>
	)
}
