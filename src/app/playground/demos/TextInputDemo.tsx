'use client'

import {useState} from 'react'
import TextInputs from '../../components/text-input/TextInputs'
import {DemoFrame, SelectControl, ToggleControl} from '../controls'

const copy = {
	email: {
		title: 'Email address',
		label: 'Email address',
		placeholder: 'you@company.com',
		hint: 'We will only use this to send a receipt.',
		error: 'Enter a valid email address.'
	},
	text: {
		title: 'Search',
		label: 'Search',
		placeholder: 'Search components',
		hint: 'Type a name or keyword.',
		error: 'Enter a search term.'
	},
	password: {
		title: 'Password',
		label: 'Password',
		placeholder: 'Enter your password',
		hint: 'Use at least 8 characters.',
		error: 'Enter a password.'
	}
} as const

export function TextInputDemo() {
	const [inputType, setInputType] = useState<keyof typeof copy>('email')
	const [disabled, setDisabled] = useState(false)
	const [required, setRequired] = useState(true)
	const [showError, setShowError] = useState(false)
	const [showLeftIcon, setShowLeftIcon] = useState(true)
	const field = copy[inputType]

	return (
		<DemoFrame
			note="Email and text fields show a clear button once they have a value. Password shows an eye button that reveals the value. Turn the left icon off to hide the type icon."
			preview={
				<TextInputs
					key={inputType}
					title={field.title}
					inputType={inputType}
					labelText={field.label}
					labelForID="playground-text-input"
					inputID="playground-text-input"
					inputSize="medium"
					placeholderText={field.placeholder}
					hintText={showError ? '' : field.hint}
					errorText={showError ? field.error : ''}
					disabledState={disabled}
					requiredState={required}
					showLeftIcon={showLeftIcon}
				/>
			}
			controls={
				<>
					<SelectControl
						label="Type"
						value={inputType}
						onChange={(value) => setInputType(value as keyof typeof copy)}
						options={[
							{value: 'email', label: 'Email'},
							{value: 'text', label: 'Text'},
							{value: 'password', label: 'Password'}
						]}
					/>
					<ToggleControl label="Left icon" checked={showLeftIcon} onChange={setShowLeftIcon} />
					<ToggleControl label="Required" checked={required} onChange={setRequired} />
					<ToggleControl label="Disabled" checked={disabled} onChange={setDisabled} />
					<ToggleControl label="Show error" checked={showError} onChange={setShowError} />
				</>
			}
		/>
	)
}
