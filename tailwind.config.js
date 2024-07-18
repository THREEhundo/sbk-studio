/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#AAAAAC',
					500: '#FFFFFF' // !Main Primary
				},
				'secondary': {
					500: '#AEFF00', // !Main Secondary
					900: '#87FA14'
				},
				'danger': '#e3342f',
				'neutral': '#1B1F27'
			},
			fontFamily: {
				'mona': ['Mona Sans', 'sans-serif'],
				'hubot': ['Hubot Sans', 'sans-serif']
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }]
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},
			spacing: {
				'128': '32rem',
				'144': '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			gradients: {
				'fresh-breeze':
					'linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)',
				'dark-slate':
					'linear-gradient(220.55deg, #565656 0%, #181818 100%)'
			}
		},
		typography: theme => ({
			DEFAULT: {
				css: {
					color: theme('colors.white'),
					a: {
						color: theme('colors.secondary.500'),
						'&:hover': {
							color: theme('colors.secondary.900')
						}
					},
					h1: {
						color: theme('colors.white')
					},
					h2: {
						color: theme('colors.white')
					},
					h3: {
						color: theme('colors.white')
					},
					h4: {
						color: theme('colors.white')
					},
					h5: {
						color: theme('colors.white')
					},
					h6: {
						color: theme('colors.white')
					},
					strong: {
						color: theme('colors.white')
					},
					code: {
						color: theme('colors.white')
					},
					figcaption: {
						color: theme('colors.primary.100')
					}
				}
			}
		})
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
}
