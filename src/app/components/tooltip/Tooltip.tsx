'use client'

import React, {ReactNode, useState} from 'react'
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion'
import './styles.css'
import {instantTransition, tween} from '../motion/motionConfig'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
	content: string
	position?: TooltipPosition
	children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({content, position = 'top', children}) => {
	const [visible, setVisible] = useState(false)
	const reducedMotion = useReducedMotion()
	const transition = reducedMotion ? instantTransition : {...tween, duration: 0.15}

	return (
		<div
			className="tooltip-container"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			onFocus={() => setVisible(true)}
			onBlur={() => setVisible(false)}
		>
			<AnimatePresence>
				{visible ? (
					<motion.div
						key="tooltip"
						className={`tooltip-box tooltip-${position}`}
						initial={{opacity: 0, scale: 0.95}}
						animate={{opacity: 1, scale: 1}}
						exit={{opacity: 0, scale: 0.95}}
						transition={transition}
						role="tooltip"
					>
						{content}
					</motion.div>
				) : null}
			</AnimatePresence>
			<div tabIndex={0} className="tooltip-target">
				{children}
			</div>
		</div>
	)
}

export default Tooltip
