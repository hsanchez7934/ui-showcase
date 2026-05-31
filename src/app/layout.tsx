import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'

const ralewaySans = Raleway({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'UI Components Showcase',
	description: 'A living collection of production-ready views and components. Built with Next.js and Tailwind, focused on reusability, accessibility, and clean, scalable code.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${ralewaySans.variable} antialiased`}>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
