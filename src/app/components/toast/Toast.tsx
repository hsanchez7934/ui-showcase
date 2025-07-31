import React from 'react'
import './styles.css'

export type ToastType = 'success' | 'warning' | 'error' | 'neutral'

interface ToastProps {
	type: ToastType
	message: string
}

const Toast: React.FC<ToastProps> = ({type, message}) => {
	return (
		<div className={`toast toast-${type}`}>
			<span className="toast-badge text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{type}</span>
			<span className="toast-message text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{message}</span>
		</div>
	)
}

export default Toast
