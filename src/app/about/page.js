import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/layout/Header'
import FeaturesContainerLG from '@/components/containers/FeaturesContainerLG'
import ButtonWrapper from '@/components/containers/ButtonWrapper'
import Image from 'next/image'

const About = () => {
	return (
		<Layout>
			<Header dataSet='about' />

			<main className='responsive-container px-4 py-8 space-y-16'>
				{/* Hero Section */}
				<section className='text-center'>
					<h1 className='text-4xl font-bold text-primary-500 mb-4'>
						About SBK Studio
					</h1>
					<p className='text-xl text-primary-100 max-w-2xl mx-auto'>
						We craft digital excellence for LA&apos;s small
						businesses, combining passion for clean code with
						stunning design.
					</p>
				</section>

				{/* Our Mission Section */}
				<section className='flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/2'>
						<h2 className='text-3xl font-bold text-primary-500 mb-4'>
							Our Mission
						</h2>
						<p className='text-lg text-primary-100'>
							At SBK Studio, we&apos;re dedicated to elevating
							small businesses in Los Angeles through custom-coded
							websites that outperform template-based solutions.
						</p>
					</div>
					<div className='md:w-1/2'>
						<Image
							src='/images/og/p2.png'
							alt='SBK Studio mission visualization'
							width={500}
							height={300}
							className='rounded-lg'
						/>
					</div>
				</section>

				{/* What We Do Best Section */}
				<section>
					<h2 className='text-3xl font-bold text-primary-500 mb-4 text-center'>
						What We Do Best
					</h2>
					<p className='text-xl text-primary-100 mb-8 text-center'>
						Elevate Your Online Presence, Amplify Your Success
					</p>
					<FeaturesContainerLG dataSet='about' />
				</section>

				{/* Call to Action Section */}
				<section className='text-center bg-neutral-800 p-8 rounded-lg'>
					<h2 className='text-3xl font-bold text-primary-500 mb-4'>
						Ready to Elevate Your Online Presence?
					</h2>
					<p className='text-xl text-primary-100 mb-6'>
						Let&apos;s discuss how we can craft a digital solution
						tailored to your business needs.
					</p>
					<ButtonWrapper
						href='/contact'
						variant='gradient'
						size='large'>
						Contact Us
					</ButtonWrapper>
				</section>
			</main>
		</Layout>
	)
}

export default About
