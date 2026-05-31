'use client'

import React from 'react'
import {motion, useReducedMotion} from 'framer-motion'
import './styles.css'
import {instantTransition, tween} from '../motion/motionConfig'

export type ToastType = 'success' | 'warning' | 'error' | 'neutral'

interface ToastProps {
	type: ToastType
	message: string
}

const Toast: React.FC<ToastProps> = ({type, message}) => {
	const reducedMotion = useReducedMotion()
	const transition = reducedMotion ? instantTransition : tween

	return (
		<motion.div
			className={`toast toast-${type}`}
			initial={{opacity: 0, x: 48, scale: 0.96}}
			animate={{opacity: 1, x: 0, scale: 1}}
			exit={{opacity: 0, x: 48, scale: 0.96}}
			transition={transition}
			role="status"
			aria-live="polite"
		>
			<span className="toast-badge text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{type}</span>
			<span className="toast-message text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{message}</span>
		</motion.div>
	)
}

export default Toast
