'use client'

import {useState} from 'react'
import {FaArrowRight, FaCheck, FaDollarSign} from 'react-icons/fa6'
import Button from '../../components/button/Button'
import {DemoFrame, SelectControl, TextControl, ToggleControl} from '../controls'

const types = [
	{value: 'primary', label: 'Primary'},
	{value: 'secondary', label: 'Secondary'},
	{value: 'tertiary', label: 'Tertiary'},
	{value: 'destructive', label: 'Destructive'},
	{value: 'linkcolor', label: 'Link'},
	{value: 'linkgray', label: 'Muted link'}
]

const sizes = [
	{value: 'small', label: 'Small'},
	{value: 'medium', label: 'Medium'},
	{value: 'large', label: 'Large'},
	{value: 'xl', label: 'Extra large'}
]

const placements = [
	{value: 'none', label: 'None'},
	{value: 'left', label: 'Left'},
	{value: 'right', label: 'Right'},
	{value: 'both', label: 'Both'}
]

const shapes = [
	{value: 'rectangle', label: 'Rectangle'},
	{value: 'rounded', label: 'Rounded'}
]

export function ButtonDemo() {
	const [buttonType, setButtonType] = useState('primary')
	const [buttonSize, setButtonSize] = useState('medium')
	const [buttonText, setButtonText] = useState('Continue')
	const [placement, setPlacement] = useState('right')
	const [shape, setShape] = useState('rectangle')
	const [disabled, setDisabled] = useState(false)
	const [clicks, setClicks] = useState(0)

	const leftIcon = placement === 'both' ? <FaDollarSign aria-hidden /> : <FaCheck aria-hidden />
	const rightIcon = placement === 'both' ? <FaDollarSign aria-hidden /> : <FaArrowRight aria-hidden />

	return (
		<DemoFrame
			note="Link styles render as text buttons. Disabled blocks the click."
			preview={
				<div className="flex flex-col items-center gap-4">
					<Button
						buttonType={buttonType}
						buttonSize={buttonSize}
						buttonText={buttonText || 'Continue'}
						iconPlacement={placement === 'none' ? undefined : placement}
						iconLeft={placement === 'left' || placement === 'both' ? leftIcon : undefined}
						iconRight={placement === 'right' || placement === 'both' ? rightIcon : undefined}
						classes={shape === 'rounded' ? 'buttonRounded' : undefined}
						btnDisabledState={disabled}
						ariaLabel={buttonText || 'Continue'}
						onClick={() => setClicks((count) => count + 1)}
					/>
					<p className="text-sm text-slate-500 dark:text-slate-400">Clicks: {clicks}</p>
				</div>
			}
			controls={
				<>
					<SelectControl label="Type" value={buttonType} onChange={setButtonType} options={types} />
					<SelectControl label="Size" value={buttonSize} onChange={setButtonSize} options={sizes} />
					<TextControl label="Label" value={buttonText} onChange={setButtonText} />
					<SelectControl label="Shape" value={shape} onChange={setShape} options={shapes} />
					<SelectControl label="Icon" value={placement} onChange={setPlacement} options={placements} />
					<ToggleControl label="Disabled" checked={disabled} onChange={setDisabled} />
				</>
			}
		/>
	)
}
