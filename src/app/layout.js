import '@/styles/fonts.css'
import './globals.css'

export const metadata = {
	title: 'SBK STUDIO',
	description: 'Web design & development for small business'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
