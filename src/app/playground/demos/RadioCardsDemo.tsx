'use client'

import {useState} from 'react'
import {RadioCardGroup} from '../../components/radio-cards/RadioCards'
import {DemoFrame} from '../controls'

const options = [
	{value: 'monthly', label: 'Monthly', description: 'Billed every month'},
	{value: 'yearly', label: 'Yearly', description: 'Save with annual billing'},
	{value: 'lifetime', label: 'Lifetime', description: 'Currently unavailable', disabled: true}
]

export function RadioCardsDemo() {
	const [selected, setSelected] = useState('monthly')
	const current = options.find((option) => option.value === selected)

	return (
		<DemoFrame
			note="Lifetime stays disabled so that state is visible next to the selectable plans."
			preview={<RadioCardGroup name="billing" options={options} selectedValue={selected} onChange={setSelected} />}
			controls={
				<p className="text-sm text-slate-700 dark:text-slate-300">
					Selected: <span className="font-semibold">{current?.label}</span>
				</p>
			}
		/>
	)
}
