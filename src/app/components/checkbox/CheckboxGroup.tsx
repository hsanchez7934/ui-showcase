import React, {useEffect, useRef, useState} from 'react'
import './styles.css'

interface CheckboxGroupProps {
	parentLabel: string
	options: {label: string; value: string; disabled?: boolean}[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({parentLabel, options}) => {
	const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>(() =>
		Object.fromEntries(options.map((opt) => [opt.value, false]))
	)

	const parentRef = useRef<HTMLInputElement>(null)
	const [parentIndeterminate, setParentIndeterminate] = useState(false)
	const [parentChecked, setParentChecked] = useState(false)

	useEffect(() => {
		const values = Object.values(checkedItems)
		const allChecked = values.every(Boolean)
		const noneChecked = values.every((val) => !val)

		const isIndeterminate = !allChecked && !noneChecked

		setParentChecked(allChecked)
		setParentIndeterminate(isIndeterminate)

		if (parentRef.current) {
			parentRef.current.indeterminate = isIndeterminate
		}
	}, [checkedItems])

	const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {checked} = e.target
		const newChecked = Object.fromEntries(
			options.map((opt) => [opt.value, opt.disabled ? checkedItems[opt.value] : checked])
		)
		setCheckedItems(newChecked)
	}

	const handleChildChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setCheckedItems((prev) => ({...prev, [value]: e.target.checked}))
	}

	return (
		<div>
			<label className='block pb-3 w-full text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
				<input
					type="checkbox"
					className={`custom-checkbox ${parentIndeterminate ? 'indeterminate' : ''}`}
					ref={parentRef}
					checked={parentChecked}
					onChange={handleParentChange}
				/>
				{parentLabel}
			</label>

			<ul className='pl-8'>
				{options.map((opt) => (
					<li key={opt.value} className='mb-3'>
						<label className='text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-28'>
							<input
								type="checkbox"
								className="custom-checkbox"
								checked={checkedItems[opt.value]}
								onChange={handleChildChange(opt.value)}
								disabled={opt.disabled}
							/>
							{opt.label}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CheckboxGroup
