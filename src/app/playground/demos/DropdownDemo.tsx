'use client'

import {useState} from 'react'
import DropDown from '../../components/dropdown/Dropdown'
import {DemoFrame, ToggleControl} from '../controls'

const options = [{value: 'Starter'}, {value: 'Pro'}, {value: 'Enterprise'}]

export function DropdownDemo() {
	const [disabled, setDisabled] = useState(false)

	return (
		<DemoFrame
			align="start"
			note="Open the menu and choose a plan. Disabled prevents the menu from opening."
			preview={
				<div className="pt-4 pb-48">
					<DropDown
						key={disabled ? 'disabled' : 'enabled'}
						width={260}
						height={48}
						data={options}
						isDisabled={disabled}
						classes="border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900"
						bgColor="bg-white dark:bg-slate-900"
						bgColorHover="hover:bg-slate-100 dark:hover:bg-slate-800"
					/>
				</div>
			}
			controls={<ToggleControl label="Disabled" checked={disabled} onChange={setDisabled} />}
		/>
	)
}
