import React from 'react'

const FolderIcon = ({ className = '' }) => {
	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 324 382'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={`fill-current ${className}`}
			role='img'
			aria-label='Folder icon'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M300 16C300 7.16344 292.837 0 284 0H126.601C120.691 0 115.263 3.25722 112.483 8.47161L95.9219 39.5284C93.1414 44.7428 87.7131 48 81.8037 48H16C7.16344 48 -4.19949e-06 55.1634 -4.08595e-06 64L-2.05582e-07 366C-9.20424e-08 374.837 7.16343 382 16 382H308C316.837 382 324 374.837 324 366V193.211C324 190.451 323.286 187.737 321.927 185.335L302.073 150.225C300.714 147.822 300 145.109 300 142.349V16Z'
			/>
		</svg>
	)
}

export default FolderIcon
