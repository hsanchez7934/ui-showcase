'use client'

import Link from 'next/link'
import image from '../../../public/abstract-background.jpg'
import StaggerContainer from '../components/motion/StaggerContainer'
import StaggerItem from '../components/motion/StaggerItem'

export default function NotFoundPage() {
	return (
		<div
			className="h-lvh flex items-center justify-center sm:justify-start"
			style={{
				backgroundImage: `url(${image.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<StaggerContainer trigger="mount" className="px-20">
				<StaggerItem>
					<p className="text-indigo-700 font-bold mb-3">Not Found</p>
				</StaggerItem>
				<StaggerItem>
					<h1 className="text-5xl font-bold text-slate-800 mb-3">{`We can't find the page`}</h1>
				</StaggerItem>
				<StaggerItem>
					<p className="text-slate-800 text-xl mb-7">
						{`Sorry, the page you are looking for doesn't exist or has been moved.`}
					</p>
				</StaggerItem>
				<StaggerItem>
					<Link
						href="/"
						className={[
							'inline-flex items-center justify-center rounded-md bg-indigo-500 p-5 text-xl',
							'w-full sm:w-[200px] cursor-pointer',
							'hover:bg-indigo-600 text-white transition-colors'
						].join(' ')}
					>
						Back to Home
					</Link>
				</StaggerItem>
			</StaggerContainer>
		</div>
	)
}
