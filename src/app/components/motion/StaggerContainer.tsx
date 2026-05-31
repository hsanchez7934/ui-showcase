'use client'

import {motion, useReducedMotion} from 'framer-motion'
import {ReactNode} from 'react'
import {staggerContainerVariants, viewport} from './motionConfig'

interface Props {
	children: ReactNode
	className?: string
	delayChildren?: number
	trigger?: 'mount' | 'view'
	id?: string
}

export default function StaggerContainer({
	children,
	className,
	delayChildren = 0,
	trigger = 'view',
	id
}: Props) {
	const reducedMotion = useReducedMotion()
	const variants = staggerContainerVariants(delayChildren)

	if (reducedMotion) {
		return (
			<div id={id} className={className}>
				{children}
			</div>
		)
	}

	if (trigger === 'mount') {
		return (
			<motion.div
				id={id}
				className={className}
				initial="hidden"
				animate="visible"
				variants={variants}
			>
				{children}
			</motion.div>
		)
	}

	return (
		<motion.div
			id={id}
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={viewport}
			variants={variants}
		>
			{children}
		</motion.div>
	)
}
