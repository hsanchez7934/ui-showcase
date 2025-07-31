'use client'

import {ReactNode} from 'react'
import clsx from 'clsx'
import './styles.css'

const getButtonColor = (key: string) => {
	const bgColor = 'bg-white'
	switch (key) {
		case 'primary':
			return 'bg-indigo-700'
		case 'destructive':
			return 'bg-red-600'
		case 'tertiary':
			return 'bg-inherit'
		default:
			break
	}
	return bgColor
}

const getButtonSize = (key: string) => {
	switch (key) {
		case 'small':
			return 'buttonSmall'
		case 'medium':
			return 'buttonMedium'
		case 'large':
			return 'buttonLarge'
		case 'xl':
			return 'buttonXLarge'
		case 'btnIcon':
			return 'buttonIcon'
		default:
			break
	}
}

const getButtonTextSize = (key: string) => {
	switch (key) {
		case 'small':
			return 'text-sm'
		case 'medium':
			return 'text-base'
		case 'large':
			return 'text-lg'
		case 'xl':
			return 'text-xl'
		default:
			break
	}
}

const getButtonHoverStyles = (key: string) => {
	switch (key) {
		case 'primary':
			return 'hover:bg-indigo-800'
		case 'destructive':
			return 'hover:bg-red-700'
		case 'secondary':
			return 'hover:bg-gray-100'
		case 'tertiary':
			return 'hover:bg-gray-200'
		default:
			break
	}
}

const getButtonClass = (key: string) => {
	switch (key) {
		case 'primary':
			return 'primaryBtnStyles'
		case 'secondary':
			return 'secondaryBtnStyles'
		case 'tertiary':
			return 'tertiaryBtnStyles'
		case 'destructive':
			return 'destructiveBtnStyles'
		default:
			break
	}
}

const getIconButtonSize = (key: string) => {
	switch (key) {
		case 'btnIconSmall':
			return 'buttonIconSmall'
		case 'btnIconMedium':
			return 'buttonIconMedium'
		case 'btnIconLarge':
			return 'buttonIconLarge'
		case 'btnIconXLarge':
			return 'buttonIconXLarge'
		default:
			break
	}
}

const getLinkBtnClasses = (key: string) => {
	switch (key) {
		case 'linkcolor':
			return 'linkcolorBtnStyles'
		case 'linkgray':
			return 'linkgrayBtnStyles'
		default:
			break
	}
}

const getLinkBtnSize = (key: string) => {
	switch (key) {
		case 'small':
			return 'text-sm'
		case 'medium':
			return 'text-base'
		case 'large':
			return 'text-lg'
		case 'xl':
			return 'text-xl'
		default:
			break
	}
}

type ButtonType = string | 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'linkcolor' | 'linkgray'
type ButtonSize = string | 'small' | 'medium' | 'large' | 'xl'

interface Props {
	buttonType: ButtonType
	buttonSize: ButtonSize
	buttonText?: string
	iconPlacement?: string | 'right' | 'left' | 'both'
	iconLeft?: ReactNode
	iconRight?: ReactNode
	iconCenter?: ReactNode
	classes?: string
	ariaLabel?: string
	btnDisabledState?: boolean
	onClick?: () => void
}

export default function Button(props: Props) {
	const {
		buttonType,
		buttonSize,
		buttonText,
		iconPlacement,
		iconRight,
		iconLeft,
		classes,
		ariaLabel,
		iconCenter,
		btnDisabledState,
		onClick
	} = props

	const renderedLeftIcon = () => {
		let markup = <></>
		const condition = (iconPlacement === 'left' || iconPlacement === 'both') && iconLeft
		if (condition) {
			// @ts-expect-error generic
			markup = iconLeft
		}
		return markup
	}

	const renderedRightIcon = () => {
		let markup = <></>
		const condition = (iconPlacement === 'right' || iconPlacement === 'both') && iconRight
		if (condition) {
			// @ts-expect-error generic
			markup = iconRight
		}
		return markup
	}

	if (buttonSize.includes('btnIcon')) {
		return (
			<button
				className={`inline-flex text-3xl buttonIcon ${getButtonColor(buttonType)} ${getButtonHoverStyles(buttonType)} ${getButtonClass(buttonType)} ${getIconButtonSize(buttonSize)} ${clsx(classes)}`}
				aria-label={ariaLabel}
			>
				{iconCenter}
			</button>
		)
	}

	if (buttonType === 'linkcolor' || buttonType === 'linkgray') {
		return (
			<button
				aria-label={ariaLabel}
				disabled={btnDisabledState || false}
				className={`${getLinkBtnClasses(buttonType)} ${getLinkBtnSize(buttonSize)} ${clsx(classes)}`}
			>
				{renderedLeftIcon()}
				{buttonText || ''}
				{renderedRightIcon()}
			</button>
		)
	}

	return (
		<button
			className={`inline-flex ${getButtonTextSize(buttonSize)} ${getButtonSize(buttonSize)} ${getButtonColor(buttonType)} ${getButtonHoverStyles(buttonType)} ${getButtonClass(buttonType)} ${clsx(classes)}`}
			aria-label={ariaLabel}
			disabled={btnDisabledState || false}
			onClick={onClick}
		>
			{renderedLeftIcon()}
			{buttonText || ''}
			{renderedRightIcon()}
		</button>
	)
}
