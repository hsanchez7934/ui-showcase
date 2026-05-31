'use client'

import image from '../../../public/prism.png'
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import Image from 'next/image'
import FadeInSection from '../components/motion/FadeInSection'
import StaggerContainer from '../components/motion/StaggerContainer'
import StaggerItem from '../components/motion/StaggerItem'

const bullets = [
	{text: 'Minimum 5K image resolution'},
	{text: 'Various format variants available'},
	{text: 'Retina display support'}
]

export default function HeroSectionFeature() {
	return (
		<div
			className={[
				'h-dvh pt-[130px] p-6 flex flex-col items-center justify-center',
				'xl:flex-row xl:gap-20'
			].join(' ')}
		>
			<StaggerContainer
				trigger="mount"
				className="w-full mb-6 sm:mb-0 xl:w-[40%] flex flex-col items-start"
			>
				<StaggerItem>
					<h1 className="font-bold text-4xl mb-10 pt-10 md:pt-0 md:text-5xl lg:text-6xl">
						Premium abstract images
					</h1>
				</StaggerItem>
				{bullets.map((bullet, index) => (
					<StaggerItem key={index}>
						<div className="flex items-center gap-3 text-xl mb-5">
							<IoCheckmarkCircleOutline style={{color: '#4338CA'}} />
							<p>{bullet.text}</p>
						</div>
					</StaggerItem>
				))}
				<StaggerItem>
					<div className="flex gap-5 items-center justify-center mt-9 mb-9 sm:justify-start">
						<button
							className={[
								'bg-white text-slate-800 rounded-sm py-3 px-9 md:px-10 shadow-md',
								'hover:bg-slate-100 hover:cursor-pointer'
							].join(' ')}
						>
							Learn More
						</button>
						<button
							className={[
								'bg-indigo-700 text-white rounded-sm py-3 px-9 md:px-10',
								'hover:bg-indigo-500 hover:cursor-pointer'
							].join(' ')}
						>
							See Pricing
						</button>
					</div>
				</StaggerItem>
			</StaggerContainer>

			<FadeInSection
				trigger="mount"
				direction="right"
				distance={40}
				delay={0.15}
				className="h-1/2 w-full shadow-2xl xl:w-[60%] xl:h-full"
			>
				<Image
					src={image}
					alt="Hero Image"
					className="w-full h-full object-cover rounded-lg"
					priority
				/>
			</FadeInSection>
		</div>
	)
}
