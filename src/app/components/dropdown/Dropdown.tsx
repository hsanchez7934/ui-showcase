'use client'

import './styles.css'
import {ReactNode, useEffect} from 'react'
import {FaAngleDown} from 'react-icons/fa6'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import React from 'react'
import clsx from 'clsx'

interface Props {
	width: number
	height: number
	iconLeft?: ReactNode
	iconRight?: ReactNode
	placeholder?: string | number
	data?: {value: string; iconLeft?: ReactNode; iconRight?: ReactNode}[]
	iconColor?: string
	classes?: string
	bgColor?: string
	bgColorHover?: string
	textColorLightMode?: string
	textColorDarkMode?: string
	textColorHoverLightMode?: string
	textColorHoverDarkMode?: string
	isDisabled?: boolean
}

export default function DropDown(props: Props) {
	const {width, height} = props
	const [focusState, setFocusState] = React.useState<boolean>(false)
	const [disabledState, setDisabledState] = React.useState<boolean>(false)
	const [selectedValue, setSelectedValue] = React.useState<string>(props?.data?.[0]?.value || '')

	useEffect(() => {
		if (props?.isDisabled) {
			setDisabledState(true)
		}
		window.onclick = (event: MouseEvent) => {
			// @ts-expect-error generic
			if (!event.target?.matches('.clickable')) {
				if (focusState) {
					setFocusState(false)
				}
				const matches = document.querySelectorAll('.dropdownMenuList')
				matches.forEach((match) => {
					match.classList.remove('block')
					match.classList.add('hidden')
				})
				const containers = document.querySelectorAll('.dropDownMenuComponent')
				containers.forEach((container) => {
					container.classList.remove('focusState')
				})
			}
		}
		return () => {
			window.onclick = null
		}
	}, [props?.isDisabled, focusState])

	const getLeftPadding = () => {
		return `${props?.iconLeft ? 'pl-[40px] lg:pl-[50px] xl:pl-[60px] 2xl:pl-[70px]' : 'pl-[15px]'}`
	}

	const getRightPadding = () => {
		return `${props?.iconRight ? 'pr-[40px] lg:pr-[50px] xl:pr-[60px] 2xl:pr-[70px]' : 'pr-[15px]'}`
	}

	const getIconLeft = () => {
		let markup = <></>

		if (props?.iconLeft) {
			markup = (
				<div
					style={{
						position: 'absolute',
						left: '0px',
						top: '0px',
						height: '100%',
						color: `${props?.iconColor || '#525252'}`
					}}
					className="clickable w-10 lg:w-12 xl:w-14 2xl:w-16"
				>
					<div className="clickable flex items-center justify-center h-full w-full text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
						{props.iconLeft}
					</div>
				</div>
			)
		}

		return markup
	}

	const getIconRight = () => {
		return (
			<div
				style={{
					position: 'absolute',
					right: '0px',
					top: '0px',
					height: '100%',
					color: `${props?.iconColor || '#525252'}`
				}}
				className="clickable w-10 lg:w-12 xl:w-14 2xl:w-16"
			>
				<div className="clickable flex items-center justify-center h-full w-full text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
					{props.iconRight || <FaAngleDown className="clickable" />}
				</div>
			</div>
		)
	}

	const handleOptionOnClick = (event: React.MouseEvent<HTMLLIElement>, value: string) => {
		setSelectedValue(value)
		setFocusState(false)
	}

	const renderedOptions = () => {
		const items = props?.data?.map((option, index) => {
			return (
				<li
					onClick={(event) => handleOptionOnClick(event, option.value)}
					title={`${option.value}`}
					key={`${option.value}_ ${index}`}
					className={`py-1.5 px-1.5 rounded-md flex items-center cursor-pointer ${clsx(
						props.bgColor ? props.bgColor : '',
						props.bgColorHover ? props.bgColorHover : '',
						props.textColorLightMode ? props.textColorLightMode : ' text-black',
						props.textColorDarkMode ? props.textColorDarkMode : 'dark:text-white',
						props.textColorHoverLightMode ? props.textColorHoverLightMode : 'hover:text-black',
						props.textColorHoverDarkMode ? props.textColorHoverDarkMode : 'dark:hover:text-white'
					)}`}
				>
					{option?.iconLeft && option?.iconLeft}
					<span className='w-full truncate'>{option.value}</span>
					{selectedValue === option.value && (
						<IoIosCheckmarkCircle
							className={`${clsx(
								'text-xl',
								props.bgColor ? props.bgColor : '',
								props.bgColorHover ? props.bgColorHover : '',
								props.textColorLightMode ? props.textColorLightMode : ' text-black',
								props.textColorDarkMode ? props.textColorDarkMode : 'dark:text-white',
								props.textColorHoverLightMode ? props.textColorHoverLightMode : 'hover:text-black',
								props.textColorHoverDarkMode
									? props.textColorHoverDarkMode
									: 'dark:hover:text-white'
							)}`}
						/>
					)}
				</li>
			)
		})
		return <ul className={`p-2 rounded-md ${clsx(props.bgColor ? props.bgColor : '')}`}>{items}</ul>
	}

	const handleMenuOnClick = () => {
		if (disabledState) {
			return
		}
		const matches = document.querySelectorAll('.dropdownMenuList')
		matches.forEach((match) => {
			match.classList.remove('block')
			match.classList.add('hidden')
		})
		const containers = document.querySelectorAll('.dropDownMenuComponent')
		containers.forEach((container) => {
			container.classList.remove('focusState')
		})
		setFocusState(!focusState)
	}

	return (
		<div
			onClick={() => handleMenuOnClick()}
			className={`clickable relative ${getLeftPadding()} ${getRightPadding()} rounded-md flex items-center dropDownMenuComponent ${clsx(
				props.classes,
				props.bgColor ? props.bgColor : '',
				props.bgColorHover ? props.bgColorHover : '',
				props.textColorLightMode ? props.textColorLightMode : ' text-black',
				props.textColorDarkMode ? props.textColorDarkMode : 'dark:text-white',
				props.textColorHoverLightMode ? props.textColorHoverLightMode : 'hover:text-black',
				props.textColorHoverDarkMode ? props.textColorHoverDarkMode : 'dark:hover:text-white',
				[
					`${disabledState ? 'cursor-not-allowed' : 'cursor-pointer'}`,
					`${disabledState && 'opacity-70 dropdownDisabledState'}`,
					`${focusState && !disabledState ? 'focusState' : ''}`
				]
			)}`}
			style={{height: `${height || 35}px`, width: `${width || 200}px`}}
		>
			{getIconLeft()}
			<span
				className="clickable truncate w-full pr-5"
				title={selectedValue || 'Click to select an option...'}
			>
				{selectedValue || 'Click to select an option...'}
			</span>
			{getIconRight()}
			<div
				className={`dropdownMenuList ${focusState ? 'block' : 'hidden'} absolute w-full h-auto max-h-96 dropdown`}
				style={{top: `${height + 10}px`, left: 0, zIndex: 1000, overflow: 'auto'}}
			>
				{renderedOptions()}
			</div>
		</div>
	)
}
