'use client'

import React from 'react'
import './styles.css'

export interface RadioCardOption {
	value: string
	label: string
	description?: string
	disabled?: boolean
}

interface RadioCardGroupProps {
	name: string
	options: RadioCardOption[]
	selectedValue: string
	onChange: (value: string) => void
}

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
	name,
	options,
	selectedValue,
	onChange
}) => {
	return (
		<div className="radio-card-group items-center justify-center">
			{options.map((option) => {
				const isChecked = selectedValue === option.value
				return (
					<label
						key={option.value}
						className={`radio-card ${isChecked ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}`}
					>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={isChecked}
							onChange={() => onChange(option.value)}
							disabled={option.disabled}
							hidden
						/>
						<div className="radio-card-content">
							<div className="radio-card-label">{option.label}</div>
							{option.description && (
								<div className="radio-card-description">{option.description}</div>
							)}
						</div>
					</label>
				)
			})}
		</div>
	)
}
