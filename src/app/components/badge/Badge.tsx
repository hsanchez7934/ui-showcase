'use client'

import './styles.css'
import clsx from 'clsx'

interface Props {
	badgeSize: string | 'small' | 'medium' | 'large'
	badgeType: string | 'neutral' | 'error' | 'success' | 'warning' | 'brand'
	badgeText: string
	classes?: string
}

export default function Badge(props: Props) {
	const {badgeSize, badgeType, badgeText} = props
	const getBadgeSize = (key: string) => {
		switch (key) {
			case 'small':
				return 'badge_size_sm'
			case 'medium':
				return 'badge_size_md'
			case 'large':
				return 'badge_size_lg'
			default:
				break
		}
	}
	const getBadgeColor = (key: string) => {
		switch (key) {
			case 'neutral':
				return 'badge_color_neutral'
			case 'danger':
				return 'badge_color_danger'
			case 'success':
				return 'badge_color_success'
			case 'warning':
				return 'badge_color_warning'
			case 'brand':
				return 'badge_color_brand'
			default:
				break
		}
	}

	return (
		<div
			className={`badge ${getBadgeSize(badgeSize)} ${getBadgeColor(badgeType)} ${clsx(props?.classes)}`}
		>
			<span>{badgeText}</span>
		</div>
	)
}
