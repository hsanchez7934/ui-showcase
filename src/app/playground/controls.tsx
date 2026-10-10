'use client'

import {ReactNode} from 'react'
import {FaXmark} from 'react-icons/fa6'

const fieldClass =
	'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100'

export function DemoFrame({
	preview,
	controls,
	note,
	align = 'center'
}: {
	preview: ReactNode
	controls: ReactNode
	note?: string
	align?: 'center' | 'start'
}) {
	return (
		<div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
			<div
				className={[
					'flex min-h-[320px] overflow-x-auto rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950',
					align === 'start' ? 'items-start justify-center' : 'items-center justify-center'
				].join(' ')}
			>
				{preview}
			</div>
			<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
				<h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Controls</h2>
				<div className="flex flex-col gap-4">{controls}</div>
				{note ? <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{note}</p> : null}
			</div>
		</div>
	)
}

export function SelectControl({
	label,
	value,
	onChange,
	options
}: {
	label: string
	value: string
	onChange: (value: string) => void
	options: {value: string; label: string}[]
}) {
	return (
		<label className="flex flex-col gap-1.5 text-sm text-slate-700 dark:text-slate-300">
			<span className="font-medium">{label}</span>
			<select className={fieldClass} value={value} onChange={(event) => onChange(event.target.value)}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</label>
	)
}

export function TextControl({
	label,
	value,
	onChange
}: {
	label: string
	value: string
	onChange: (value: string) => void
}) {
	const canClear = value.length > 0

	return (
		<label className="flex flex-col gap-1.5 text-sm text-slate-700 dark:text-slate-300">
			<span className="font-medium">{label}</span>
			<span className="relative">
				<input
					className={`${fieldClass}${canClear ? ' pr-9' : ''}`}
					value={value}
					onChange={(event) => onChange(event.target.value)}
				/>
				{canClear ? (
					<button
						type="button"
						className="absolute top-1/2 right-1.5 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md border-none bg-transparent p-0 text-slate-500 shadow-none! hover:bg-slate-100 hover:text-slate-900 focus:shadow-none! focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
						aria-label={`Clear ${label}`}
						onMouseDown={(event) => event.preventDefault()}
						onClick={() => onChange('')}
					>
						<FaXmark className="size-3.5" aria-hidden />
					</button>
				) : null}
			</span>
		</label>
	)
}

export function ToggleControl({
	label,
	checked,
	onChange
}: {
	label: string
	checked: boolean
	onChange: (checked: boolean) => void
}) {
	return (
		<label className="flex items-center justify-between gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
			<span>{label}</span>
			<input
				type="checkbox"
				className="h-4 w-4 accent-indigo-600"
				checked={checked}
				onChange={(event) => onChange(event.target.checked)}
			/>
		</label>
	)
}
