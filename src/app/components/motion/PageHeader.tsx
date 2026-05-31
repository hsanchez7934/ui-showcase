'use client'

import StaggerContainer from './StaggerContainer'
import StaggerItem from './StaggerItem'

interface Props {
	eyebrow?: string
	title: string
	description?: string
	eyebrowClassName?: string
	titleClassName?: string
	descriptionClassName?: string
	trigger?: 'mount' | 'view'
	className?: string
}

export default function PageHeader({
	eyebrow,
	title,
	description,
	eyebrowClassName = 'text-lg text-indigo-600 text-center mb-5',
	titleClassName = 'text-4xl text-center mb-5 max-w-3xl mx-auto',
	descriptionClassName = 'text-slate-700 dark:text-slate-400 text-2xl text-center max-w-3xl mx-auto',
	trigger = 'mount',
	className
}: Props) {
	return (
		<StaggerContainer trigger={trigger} className={className}>
			{eyebrow ? (
				<StaggerItem>
					<p className={eyebrowClassName}>{eyebrow}</p>
				</StaggerItem>
			) : null}
			<StaggerItem>
				<h1 className={titleClassName}>{title}</h1>
			</StaggerItem>
			{description ? (
				<StaggerItem>
					<p className={descriptionClassName}>{description}</p>
				</StaggerItem>
			) : null}
		</StaggerContainer>
	)
}
