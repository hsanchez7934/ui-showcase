'use client'

import Image from 'next/image'
import {motion, useReducedMotion} from 'framer-motion'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaXTwitter} from 'react-icons/fa6'
import HoverLiftCard from '../motion/HoverLiftCard'
import {spring} from '../motion/motionConfig'

interface Props {
	name: string
	title: string
	description: string
	imgSrc: string
}

const socialIcons = [
	{Icon: FaLinkedin, hoverClass: 'hover:text-blue-700'},
	{Icon: FaGithub, hoverClass: 'hover:text-gray-700'},
	{Icon: RiInstagramFill, hoverClass: 'hover:text-pink-500'},
	{Icon: FaXTwitter, hoverClass: 'hover:text-blue-500'}
]

const iconVariants = {
	rest: {scale: 1},
	hover: {scale: 1.15}
}

export default function ProfileCard({name, title, description, imgSrc}: Props) {
	const reducedMotion = useReducedMotion()

	return (
		<HoverLiftCard className="rounded-md p-6 w-[300px] sm:w-[350px] md:w-[400px] bg-white shadow-lg dark:bg-gray-800">
			<div className="flex items-center justify-center">
				<motion.div whileHover={reducedMotion ? undefined : {scale: 1.08}} transition={spring}>
					<Image src={imgSrc} alt="stock image" width={100} height={100} className="rounded-full" />
				</motion.div>
			</div>
			<h1 className="text-lg font-bold text-center mt-4 mb-1">{name}</h1>
			<h2 className="text-center text-gray-500 dark:text-gray-400 mb-4">{title}</h2>
			<p className="text-center text-gray-500 dark:text-gray-400 mb-4">{description}</p>
			<div className="flex items-center justify-center py-8">
				<button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full transition-colors">
					Contact Me
				</button>
			</div>
			<motion.div
				className="flex items-center justify-center gap-4 py-3"
				initial="rest"
				whileHover={reducedMotion ? undefined : 'hover'}
				variants={{
					hover: {transition: {staggerChildren: 0.05}}
				}}
			>
				{socialIcons.map(({Icon, hoverClass}, index) => (
					<motion.span key={index} variants={reducedMotion ? undefined : iconVariants} transition={spring}>
						<Icon
							size={24}
							className={`text-indigo-500 dark:text-gray-400 ${hoverClass} cursor-pointer`}
						/>
					</motion.span>
				))}
			</motion.div>
		</HoverLiftCard>
	)
}
