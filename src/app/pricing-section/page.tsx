'use client'

import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import PageHeader from '../components/motion/PageHeader'
import StaggerContainer from '../components/motion/StaggerContainer'
import StaggerItem from '../components/motion/StaggerItem'

const features = [
	{key: 'feature-1', text: '123 available credits for all images'},
	{key: 'feature-2', text: 'Up to 3 users'},
	{key: 'feature-3', text: '24 hour response time'},
	{key: 'feature-4', text: 'Advanced analytics'}
]

export default function PricingSection() {
	return (
		<div className="pt-30 min-h-screen max-w-[1500px] mx-auto flex flex-col items-center p-6">
			<PageHeader
				eyebrow="One time purchase"
				title="Pay as you need"
				description="We offer one-time purchases with credits, for you to use as needed. Always active."
				titleClassName="text-4xl text-center font-bold text-black dark:text-white mb-4"
				descriptionClassName="text-slate-600 dark:text-slate-400 text-xl text-center max-w-3xl mx-auto mb-5"
				eyebrowClassName="text-indigo-600 text-lg mb-5"
			/>

			<StaggerContainer
				trigger="mount"
				delayChildren={0.15}
				className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-7"
			>
				<StaggerItem className="py-4">
					<h2 className="text-2xl font-bold text-black dark:text-white mb-4">
						Unlock creativity once, enjoy forever
					</h2>
					<ul className="flex flex-col gap-4">
						{features.map((feature) => (
							<li key={feature.key}>
								<div className="flex items-center gap-2">
									<IoCheckmarkCircleOutline className="text-indigo-600 h-6 w-6 shrink-0" />
									<p className="text-slate-600 dark:text-slate-400 text-lg">{feature.text}</p>
								</div>
							</li>
						))}
					</ul>
				</StaggerItem>

				<StaggerItem>
					<div
						className={[
							'flex flex-col items-center justify-center gap-4',
							'border border-slate-200 dark:border-slate-700 rounded-lg p-7',
							'shadow-md dark:shadow-slate-800'
						].join(' ')}
					>
						<div
							id="badge"
							className={[
								'bg-green-100 flex items-center justify-center border',
								'border-green-200 text-green-700 rounded-full px-3 py-1 text-sm',
								'mb-4 rounded-full font-semibold'
							].join(' ')}
						>
							<span>Popular</span>
						</div>

						<div className="flex flex-col items-center justify-center gap-1">
							<p className="text-6xl font-bold text-black dark:text-white">$699</p>
							<p className="text-slate-600 dark:text-slate-400 text-sm">Prices in USD</p>
						</div>

						<p className="text-slate-600 dark:text-slate-400 text-2xl text-center">
							Pay once, use it forever. No strings attached.
						</p>

						<div className="w-full py-7">
							<button className="w-full bg-indigo-600 text-white rounded-sm py-3 px-9 md:px-10 hover:bg-indigo-500 transition-colors">
								Buy Now
							</button>
						</div>
					</div>
				</StaggerItem>
			</StaggerContainer>
		</div>
	)
}
