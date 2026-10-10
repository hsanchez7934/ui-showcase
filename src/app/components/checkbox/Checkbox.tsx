'use client'

import './styles.css'
import React from 'react'

interface Props {
	index: number
}

const Checkbox = (props: Props) => {
	const [checked, setChecked] = React.useState(false)
	const [checkboxText, setCheckboxText] = React.useState('')
	const [isIndeterminate, setIsIndeterminate] = React.useState(false)
	const [index, setIndex] = React.useState(props.index || 0)
	const inputRef = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		if (index === 0) {
			setCheckboxText('Unchecked')
			setChecked(false)
			setIsIndeterminate(false)
		}
		if (index === 1) {
			setCheckboxText('Indeterminate')
			// @ts-expect-error generic
			inputRef.current.indeterminate = true
			setChecked(false)
			setIsIndeterminate(true)
		}
		if (index === 2) {
			setCheckboxText('Checked')
			setChecked(true)
			setIsIndeterminate(false)
		}
	}, [index])

	const handleOnChange = () => {
		const input = inputRef.current
		if (index === 0) {
			setIndex(1)
		}
		if (index === 1) {
			// @ts-expect-error generic
			input.indeterminate = false
			setIndex(2)
		}
		if (index === 2) {
			setIndex(0)
		}
	}

	return (
		<div className="flex items-center justify-center gap-3 mb-8">
			<input
				type="checkbox"
				id={`${inputRef.current?.id}`}
				ref={inputRef}
				checked={checked}
				onChange={handleOnChange}
				className={`custom-checkbox ${isIndeterminate ? 'indeterminate' : ''}`}
			/>
			<label htmlFor={inputRef.current?.id} className="text-base">
				{checkboxText}
			</label>
		</div>
	)
}

export default Checkbox
