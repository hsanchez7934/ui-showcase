'use client'

import React from 'react'
import {motion, useReducedMotion} from 'framer-motion'
import './styles.css'
import {spring} from '../motion/motionConfig'

interface ToggleSwitchProps {
	isOn: boolean
	onToggle: () => void
	labelText?: string
	labelPosition?: 'left' | 'right'
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
	activeColor?: string
	inactiveColor?: string
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
	isOn,
	onToggle,
	labelText,
	labelPosition = 'right',
	icon,
	iconPosition = 'left',
	activeColor = '#4f46e5',
	inactiveColor = '#ccc'
}) => {
	const reducedMotion = useReducedMotion()

	return (
		<div className="toggle-wrapper">
			{labelText && labelPosition === 'left' && <span className="toggle-label">{labelText}</span>}
			{icon && iconPosition === 'left' && <span className="toggle-icon">{icon}</span>}

			<motion.div
				className="toggle-switch"
				onClick={onToggle}
				animate={{backgroundColor: isOn ? activeColor : inactiveColor}}
				transition={reducedMotion ? {duration: 0} : {duration: 0.2}}
				role="switch"
				aria-checked={isOn}
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault()
						onToggle()
					}
				}}
			>
				<motion.div
					className="toggle-knob"
					animate={{left: isOn ? 24 : 2}}
					transition={reducedMotion ? {duration: 0} : spring}
				/>
			</motion.div>

			{icon && iconPosition === 'right' && <span className="toggle-icon">{icon}</span>}
			{labelText && labelPosition === 'right' && <span className="toggle-label">{labelText}</span>}
		</div>
	)
}
