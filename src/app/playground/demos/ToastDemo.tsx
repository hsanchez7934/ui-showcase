'use client'

import {useEffect, useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import Button from '../../components/button/Button'
import Toast, {ToastType} from '../../components/toast/Toast'
import {DemoFrame, SelectControl, TextControl} from '../controls'

const types: {value: ToastType; label: string}[] = [
	{value: 'success', label: 'Success'},
	{value: 'warning', label: 'Warning'},
	{value: 'error', label: 'Error'},
	{value: 'neutral', label: 'Neutral'}
]

export function ToastDemo() {
	const [type, setType] = useState<ToastType>('success')
	const [message, setMessage] = useState('Changes saved.')
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (!visible) {
			return
		}
		const timeout = window.setTimeout(() => setVisible(false), 3200)
		return () => window.clearTimeout(timeout)
	}, [visible, type, message])

	return (
		<DemoFrame
			note="The toast dismisses on its own after a few seconds."
			preview={
				<div className="flex min-h-[140px] flex-col items-center justify-center gap-6">
					<Button
						buttonType="primary"
						buttonSize="medium"
						buttonText="Show toast"
						ariaLabel="Show toast"
						onClick={() => setVisible(true)}
					/>
					<AnimatePresence>
						{visible ? <Toast key={`${type}-${message}`} type={type} message={message || 'Notification'} /> : null}
					</AnimatePresence>
				</div>
			}
			controls={
				<>
					<SelectControl
						label="Type"
						value={type}
						onChange={(value) => setType(value as ToastType)}
						options={types}
					/>
					<TextControl label="Message" value={message} onChange={setMessage} />
				</>
			}
		/>
	)
}
