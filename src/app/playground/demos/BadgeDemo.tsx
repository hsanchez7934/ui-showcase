'use client'

import {useState} from 'react'
import Badge from '../../components/badge/Badge'
import {DemoFrame, SelectControl, TextControl} from '../controls'

const sizes = [
	{value: 'small', label: 'Small'},
	{value: 'medium', label: 'Medium'},
	{value: 'large', label: 'Large'}
]

const types = [
	{value: 'neutral', label: 'Neutral'},
	{value: 'brand', label: 'Brand'},
	{value: 'success', label: 'Success'},
	{value: 'warning', label: 'Warning'},
	{value: 'danger', label: 'Danger'}
]

export function BadgeDemo() {
	const [badgeSize, setBadgeSize] = useState('medium')
	const [badgeType, setBadgeType] = useState('brand')
	const [badgeText, setBadgeText] = useState('In review')

	return (
		<DemoFrame
			preview={<Badge badgeSize={badgeSize} badgeType={badgeType} badgeText={badgeText || 'Badge'} />}
			controls={
				<>
					<SelectControl label="Size" value={badgeSize} onChange={setBadgeSize} options={sizes} />
					<SelectControl label="Color" value={badgeType} onChange={setBadgeType} options={types} />
					<TextControl label="Label" value={badgeText} onChange={setBadgeText} />
				</>
			}
		/>
	)
}
