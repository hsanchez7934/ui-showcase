'use client'

import {useState} from 'react'
import Checkbox from '../../components/checkbox/Checkbox'
import CheckboxGroup from '../../components/checkbox/CheckboxGroup'
import {DemoFrame, SelectControl} from '../controls'

const starts = [
	{value: '0', label: 'Unchecked'},
	{value: '1', label: 'Indeterminate'},
	{value: '2', label: 'Checked'}
]

export function CheckboxDemo() {
	const [start, setStart] = useState('0')

	return (
		<DemoFrame
			align="start"
			note="Click the single checkbox to cycle unchecked, indeterminate, and checked. The group parent becomes indeterminate when only some children are selected."
			preview={
				<div className="flex w-full max-w-2xl flex-col gap-8 md:flex-row md:justify-center">
					<div>
						<p className="mb-3 text-sm font-medium text-slate-500">Single</p>
						<Checkbox key={start} index={Number(start)} />
					</div>
					<div>
						<p className="mb-3 text-sm font-medium text-slate-500">Group</p>
						<CheckboxGroup
							parentLabel="Notifications"
							options={[
								{label: 'Email', value: 'email'},
								{label: 'SMS', value: 'sms'},
								{label: 'Push', value: 'push'}
							]}
						/>
					</div>
				</div>
			}
			controls={
				<SelectControl label="Single checkbox starts as" value={start} onChange={setStart} options={starts} />
			}
		/>
	)
}
