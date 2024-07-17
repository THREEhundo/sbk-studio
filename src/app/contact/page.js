import ContactForm from '@/components/forms/ContactForm'
import Layout from '@/components/Layout'
import React from 'react'

export default function ContactPage() {
	return (
		<Layout>
			<section className='container'>
				<ContactForm />
			</section>
		</Layout>
	)
}
