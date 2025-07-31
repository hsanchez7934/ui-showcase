'use client'

import React from 'react'
import './styles.css'

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
	return (
		<div className="toggle-wrapper">
			{labelText && labelPosition === 'left' && <span className="toggle-label">{labelText}</span>}
			{icon && iconPosition === 'left' && <span className="toggle-icon">{icon}</span>}

			<div
				className="toggle-switch"
				onClick={onToggle}
				style={{backgroundColor: isOn ? activeColor : inactiveColor}}
			>
				<div className={`toggle-knob ${isOn ? 'on' : 'off'}`} />
			</div>

			{icon && iconPosition === 'right' && <span className="toggle-icon">{icon}</span>}
			{labelText && labelPosition === 'right' && <span className="toggle-label">{labelText}</span>}
		</div>
	)
}
