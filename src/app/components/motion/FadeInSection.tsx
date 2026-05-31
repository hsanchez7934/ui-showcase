'use client'

import {motion, useReducedMotion} from 'framer-motion'
import {ReactNode} from 'react'
import {FadeDirection, fadeVariants, instantTransition, tween, viewport} from './motionConfig'

interface Props {
	children: ReactNode
	delay?: number
	direction?: FadeDirection
	distance?: number
	once?: boolean
	trigger?: 'mount' | 'view'
	className?: string
}

export default function FadeInSection({
	children,
	delay = 0,
	direction = 'up',
	distance = 24,
	once = true,
	trigger = 'view',
	className
}: Props) {
	const reducedMotion = useReducedMotion()

	if (reducedMotion) {
		return <div className={className}>{children}</div>
	}

	const motionProps =
		trigger === 'mount'
			? {initial: 'hidden' as const, animate: 'visible' as const}
			: {
					initial: 'hidden' as const,
					whileInView: 'visible' as const,
					viewport: {...viewport, once}
				}

	return (
		<motion.div
			className={className}
			{...motionProps}
			variants={fadeVariants(distance, direction)}
			transition={{...tween, delay}}
		>
			{children}
		</motion.div>
	)
}

export {instantTransition}
