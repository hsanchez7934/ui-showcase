'use client'

import {motion, useReducedMotion} from 'framer-motion'
import {ReactNode} from 'react'
import {pageTransitionVariants} from './motionConfig'

interface Props {
	children: ReactNode
}

export default function PageTransition({children}: Props) {
	const reducedMotion = useReducedMotion()

	if (reducedMotion) {
		return <>{children}</>
	}

	return (
		<motion.div initial="hidden" animate="visible" variants={pageTransitionVariants}>
			{children}
		</motion.div>
	)
}
