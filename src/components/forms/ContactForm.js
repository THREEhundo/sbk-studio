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

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
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
					alert('Message sent successfully!')
					setFormData({ name: '', email: '', phone: '', message: '' })
				} else {
					throw new Error('Failed to send message')
				}
			} catch (error) {
				alert('An error occurred. Please try again later.')
				console.error('Submission error:', error)
			} finally {
				setIsSubmitting(false)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name' className='block mb-1'>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					className='w-full px-3 py-2 border rounded-md'
					required
				/>
				{errors.name && (
					<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
				)}
			</div>

			<div>
				<label htmlFor='email' className='block mb-1'>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className='w-full px-3 py-2 border rounded-md'
					required
				/>
				{errors.email && (
					<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
				)}
			</div>

			<div>
				<label htmlFor='phone' className='block mb-1'>
					Phone Number
				</label>
				<input
					type='tel'
					id='phone'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					className='w-full px-3 py-2 border rounded-md'
					required
				/>
				{errors.phone && (
					<p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
				)}
			</div>

			<div>
				<label htmlFor='message' className='block mb-1'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					rows='4'
					className='w-full px-3 py-2 border rounded-md'
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
				className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
				{isSubmitting ? 'Sending...' : 'Submit'}
			</button>
		</form>
	)
}

export default ContactForm
