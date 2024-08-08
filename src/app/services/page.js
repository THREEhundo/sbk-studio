import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import TopicContainer from '@/components/containers/TopicContainer'
import { getPageData } from '@/lib/pageData'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '../metadata'
import MainContainer from '@/components/containers/MainContainer'
import HoverRevealComponent from '@/components/containers/HoverRevealComponent '

const SERVICES_PAGE_TITLE =
	'SBK STUDIO | Web Design & Development Services for Small Businesses'

async function getServicesData() {
	const pageData = await getPageData()
	if (!Array.isArray(pageData)) {
		console.error('Page data is not an array:', pageData)
		return null
	}

	const servicesObj =
		pageData.find(item => item.pageTitle === SERVICES_PAGE_TITLE) ||
		pageData.find(
			item =>
				item.pageTitle &&
				item.pageTitle
					.toLowerCase()
					.includes('web design & development services')
		)

	if (!servicesObj) {
		console.error(
			'Services object not found. Available titles:',
			pageData.map(item => item.pageTitle)
		)
		return null
	}

	return servicesObj
}

export async function generateMetadata() {
	const servicesObj = await getServicesData()
	if (!servicesObj) return {}

	return generateSEOMetadata(
		servicesObj.pageTitle,
		servicesObj.metaDescription
	)
}

const Services = async () => {
	const servicesObj = await getServicesData()

	if (!servicesObj) {
		notFound()
	}
	const h3sObj = servicesObj.sections.filter(service => service.h3s)
	//console.log(h3sObj, 'H3object')
	return (
		<PageLayout
			headerProps={{
				heroData: servicesObj,
				specificId: SERVICES_PAGE_TITLE
			}}>
			<MainContainer>
				{h3sObj.length > 0 && <TopicContainer dataSet={h3sObj} />}
				<div className='grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-8 mb-12'>
					{servicesObj.sections.map(
						section =>
							!section.h3s && (
								<HoverRevealComponent
									key={section.id || section.h2}
									title={section.h2}
									content={section.content}
									content2={section.content2}
								/>
							)
					)}
				</div>
			</MainContainer>
		</PageLayout>
	)
}

export default Services
