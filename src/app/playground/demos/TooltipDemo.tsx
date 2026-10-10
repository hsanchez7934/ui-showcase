'use client'

import {useState} from 'react'
import Button from '../../components/button/Button'
import Tooltip from '../../components/tooltip/Tooltip'
import {DemoFrame, SelectControl, TextControl} from '../controls'

const positions = [
	{value: 'top', label: 'Top'},
	{value: 'bottom', label: 'Bottom'},
	{value: 'left', label: 'Left'},
	{value: 'right', label: 'Right'}
]

export function TooltipDemo() {
	const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top')
	const [content, setContent] = useState('Save this view to your library')

	return (
		<DemoFrame
			note="Hover the button or focus it with the keyboard to reveal the tooltip."
			preview={
				<div className="px-16 py-10">
					<Tooltip content={content || 'Tooltip'} position={position}>
						<Button buttonType="secondary" buttonSize="medium" buttonText="Hover or focus" ariaLabel="Hover or focus" />
					</Tooltip>
				</div>
			}
			controls={
				<>
					<SelectControl
						label="Position"
						value={position}
						onChange={(value) => setPosition(value as 'top' | 'bottom' | 'left' | 'right')}
						options={positions}
					/>
					<TextControl label="Content" value={content} onChange={setContent} />
				</>
			}
		/>
	)
}
