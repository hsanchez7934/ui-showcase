'use client'

import React, {ReactNode} from 'react'
import {motion, useReducedMotion} from 'framer-motion'
import {FaCircleCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation} from 'react-icons/fa6'
import './styles.css'
import {instantTransition, tween} from '../motion/motionConfig'

export type ToastType = 'success' | 'warning' | 'error' | 'neutral'

interface ToastProps {
	type: ToastType
	message: string
}

const icons: Record<ToastType, ReactNode> = {
	success: <FaCircleCheck aria-hidden />,
	warning: <FaTriangleExclamation aria-hidden />,
	error: <FaCircleXmark aria-hidden />,
	neutral: <FaCircleInfo aria-hidden />
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
			<span className="toast-icon">{icons[type]}</span>
			<span className="sr-only">{type}. </span>
			<span className="toast-message">{message}</span>
		</motion.div>
	)
}

export default Toast
