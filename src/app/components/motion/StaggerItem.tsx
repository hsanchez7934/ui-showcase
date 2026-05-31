'use client'

import {motion, useReducedMotion} from 'framer-motion'
import {ReactNode} from 'react'
import {staggerItemVariants} from './motionConfig'

interface Props {
	children: ReactNode
	className?: string
}

export default function StaggerItem({children, className}: Props) {
	const reducedMotion = useReducedMotion()

	if (reducedMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div className={className} variants={staggerItemVariants}>
			{children}
		</motion.div>
	)
}
