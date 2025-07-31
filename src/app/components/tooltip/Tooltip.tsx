'use client'

import React, {ReactNode, useState} from 'react'
import './styles.css'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
	content: string
	position?: TooltipPosition
	children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({content, position = 'top', children}) => {
	const [visible, setVisible] = useState(false)

	return (
		<div
			className="tooltip-container"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			onFocus={() => setVisible(true)}
			onBlur={() => setVisible(false)}
		>
			{visible && <div className={`tooltip-box tooltip-${position}`}>{content}</div>}
			<div tabIndex={0} className="tooltip-target">
				{children}
			</div>
		</div>
	)
}

export default Tooltip