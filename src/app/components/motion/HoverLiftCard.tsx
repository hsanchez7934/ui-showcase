'use client'

import {motion, useReducedMotion} from 'framer-motion'
import {ReactNode} from 'react'
import {spring} from './motionConfig'

interface Props {
	children: ReactNode
	className?: string
	hoverY?: number
}

export default function HoverLiftCard({children, className, hoverY = -6}: Props) {
	const reducedMotion = useReducedMotion()

	if (reducedMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			whileHover={{y: hoverY}}
			whileTap={{scale: 0.98}}
			transition={spring}
		>
			{children}
		</motion.div>
	)
}
