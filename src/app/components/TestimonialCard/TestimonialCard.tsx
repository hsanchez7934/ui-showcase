'use client'

import Image from 'next/image'
import {motion, useReducedMotion} from 'framer-motion'
import HoverLiftCard from '../motion/HoverLiftCard'
import {spring} from '../motion/motionConfig'

interface Props {
	imgSrc: string
	titleText: string
	username: string
	bodyText: string
}

export default function TestimonialCard(props: Props) {
	const {imgSrc, titleText, username, bodyText} = props
	const reducedMotion = useReducedMotion()

	return (
		<HoverLiftCard className="rounded-md p-6 w-[300px] sm:w-[350px] md:w-[400px] bg-white shadow-lg dark:bg-gray-800">
			<div className="flex">
				<motion.div
					whileHover={reducedMotion ? undefined : {scale: 1.08}}
					transition={spring}
				>
					<Image src={imgSrc} alt="stock image" width={50} height={50} className="rounded-full" />
				</motion.div>
				<div className="flex flex-col pl-5">
					<p className="text-lg font-bold">{titleText}</p>
					<div className="flex text-md text-gray-500 dark:text-gray-400">
						<span>@</span>
						<span>{username}</span>
					</div>
				</div>
			</div>

			<div className="pt-5">
				<p>{bodyText}</p>
			</div>
		</HoverLiftCard>
	)
}
