'use client'

import React, {useState, FocusEvent} from 'react'
import './styles.css'

interface TextareaProps {
	label: string
	value: string
	onChange: (value: string) => void
	maxLength?: number
	error?: string
	placeholder?: string
}

const Textarea: React.FC<TextareaProps> = ({
	label,
	value,
	onChange,
	maxLength = 200,
	error,
	placeholder
}) => {
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
		console.log(e)
		setIsFocused(true)
	}

	const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
		console.log(e)
		setIsFocused(false)
	}

	const isOverLimit = value.length > maxLength

	const getBoxShadow = () => {
		if (error && isFocused) {
			return '0px 0px 4px 3px rgba(220, 38, 38, 0.5)'
		}
		if (isFocused) {
			return '0px 0px 4px 3px rgba(67, 56, 202, 0.5)'
		}
		return 'none'
	}

	return (
		<div className="textarea-wrapper">
			<label className="textarea-label">{label}</label>
			<textarea
				className="custom-textarea"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholder={placeholder}
				style={{
					boxShadow: getBoxShadow(),
					borderColor: error ? '#dc2626' : '#ccc'
				}}
			/>
			<div className="textarea-footer">
				<span className="textarea-error">{error}</span>
				<span className={`textarea-count ${isOverLimit ? 'over-limit' : ''}`}>
					{value.length}/{maxLength}
				</span>
			</div>
		</div>
	)
}

export default Textarea
