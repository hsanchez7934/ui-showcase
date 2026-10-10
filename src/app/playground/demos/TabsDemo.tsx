'use client'

import {useState} from 'react'
import {Tabs} from '../../components/tabs/Tabs'
import {DemoFrame, SelectControl} from '../controls'

const tabs = [
	{label: 'Overview', content: <p>A short summary of the product and who it is for.</p>},
	{label: 'Details', content: <p>Specs, formats, and what is included with each plan.</p>},
	{label: 'Reviews', content: <p>Recent notes from teams using the component library.</p>}
]

export function TabsDemo() {
	const [initial, setInitial] = useState('0')

	return (
		<DemoFrame
			align="start"
			note="Changing the starting tab remounts the component. After that, the tab list keeps its own active panel."
			preview={<Tabs key={initial} tabs={tabs} initialIndex={Number(initial)} />}
			controls={
				<SelectControl
					label="Start on"
					value={initial}
					onChange={setInitial}
					options={tabs.map((tab, index) => ({value: String(index), label: tab.label}))}
				/>
			}
		/>
	)
}
