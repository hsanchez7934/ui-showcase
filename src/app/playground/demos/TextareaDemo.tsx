'use client'

import {useState} from 'react'
import Textarea from '../../components/textarea/Textarea'
import {DemoFrame, SelectControl, TextControl, ToggleControl} from '../controls'

export function TextareaDemo() {
	const [value, setValue] = useState('A short note about the project.')
	const [label, setLabel] = useState('')
	const [maxLength, setMaxLength] = useState('80')
	const [showError, setShowError] = useState(false)
	const textareaLabel = label.trim() || 'Project note'

	return (
		<DemoFrame
			note="The counter turns red after the character limit. The field stays editable so the over-limit state is visible. An empty label falls back to Project note."
			preview={
				<Textarea
					label={textareaLabel}
					value={value}
					onChange={setValue}
					maxLength={Number(maxLength)}
					placeholder="Write a short note"
					error={showError ? 'This note needs a clearer summary.' : ''}
				/>
			}
			controls={
				<>
					<TextControl label="Label" value={label} onChange={setLabel} />
					<SelectControl
						label="Character limit"
						value={maxLength}
						onChange={setMaxLength}
						options={[
							{value: '40', label: '40'},
							{value: '80', label: '80'},
							{value: '200', label: '200'}
						]}
					/>
					<ToggleControl label="Show error" checked={showError} onChange={setShowError} />
				</>
			}
		/>
	)
}
