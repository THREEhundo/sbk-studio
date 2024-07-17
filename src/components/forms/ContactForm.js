'use client'

import React, { useState } from 'react'

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: ''
	})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
		}
	}

	const validateForm = () => {
		let tempErrors = {}
		if (!formData.name.trim()) tempErrors.name = 'Name is required'
		if (!formData.email.trim()) {
			tempErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = 'Email is invalid'
		}
		if (!formData.phone.trim()) {
			tempErrors.phone = 'Phone number is required'
		} else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
			tempErrors.phone = 'Phone number is invalid'
		}
		if (!formData.message.trim()) tempErrors.message = 'Message is required'
		setErrors(tempErrors)
		return Object.keys(tempErrors).length === 0
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (validateForm()) {
			setIsSubmitting(true)
			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				})

				if (response.ok) {
					setSubmitStatus('success')
					setFormData({ name: '', email: '', phone: '', message: '' })
				} else {
					throw new Error('Failed to send message')
				}
			} catch (error) {
				setSubmitStatus('error')
				console.error('Submission error:', error)
			} finally {
				setIsSubmitting(false)
			}
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-lg mx-auto bg-neutral-800 p-8 rounded-lg shadow-xl'>
			<h1 className='text-3xl font-bold text-primary-500 mb-6'>
				Contact Us
			</h1>
			<div className='mb-4'>
				<label htmlFor='name' className='block text-primary-100 mb-2'>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					className={`w-full px-3 py-2 bg-neutral-700 text-primary-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 transition duration-200 ${
						errors.name ? 'border-red-500' : 'border-neutral-600'
					}`}
					required
				/>
				{errors.name && (
					<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
				)}
			</div>

			<div className='mb-4'>
				<label htmlFor='email' className='block text-primary-100 mb-2'>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className={`w-full px-3 py-2 bg-neutral-700 text-primary-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 transition duration-200 ${
						errors.email ? 'border-red-500' : 'border-neutral-600'
					}`}
					required
				/>
				{errors.email && (
					<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
				)}
			</div>

			<div className='mb-4'>
				<label htmlFor='phone' className='block text-primary-100 mb-2'>
					Phone Number
				</label>
				<input
					type='tel'
					id='phone'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					className={`w-full px-3 py-2 bg-neutral-700 text-primary-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 transition duration-200 ${
						errors.phone ? 'border-red-500' : 'border-neutral-600'
					}`}
					required
				/>
				{errors.phone && (
					<p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
				)}
			</div>

			<div className='mb-6'>
				<label
					htmlFor='message'
					className='block text-primary-100 mb-2'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					rows='4'
					className={`w-full px-3 py-2 bg-neutral-700 text-primary-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 transition duration-200 ${
						errors.message ? 'border-red-500' : 'border-neutral-600'
					}`}
					required></textarea>
				{errors.message && (
					<p className='text-red-500 text-sm mt-1'>
						{errors.message}
					</p>
				)}
			</div>

			<button
				type='submit'
				disabled={isSubmitting}
				className='w-full bg-secondary-500 text-neutral py-2 px-4 rounded-md hover:bg-secondary-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'>
				{isSubmitting ? 'Sending...' : 'Submit'}
			</button>

			{submitStatus === 'success' && (
				<p className='mt-4 text-green-500 text-center'>
					Message sent successfully!
				</p>
			)}
			{submitStatus === 'error' && (
				<p className='mt-4 text-red-500 text-center'>
					Failed to send message. Please try again.
				</p>
			)}
		</form>
	)
}

export default ContactForm
