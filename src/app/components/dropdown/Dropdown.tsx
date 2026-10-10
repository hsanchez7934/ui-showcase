'use client'

import './styles.css'
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion'
import {MouseEvent, ReactNode, useEffect, useRef, useState} from 'react'
import {FaAngleDown} from 'react-icons/fa6'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import clsx from 'clsx'
import {instantTransition, tween} from '../motion/motionConfig'

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

const arrowTransition = {duration: 0.2, ease: 'easeOut' as const}

export default function DropDown(props: Props) {
	const {width, height} = props
	const rootRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState<string>(props?.data?.[0]?.value || '')
	const reducedMotion = useReducedMotion()
	const menuTransition = reducedMotion ? instantTransition : tween
	const disabled = Boolean(props.isDisabled)

	useEffect(() => {
		if (!open) {
			return
		}

		const handlePointerDown = (event: PointerEvent) => {
			const target = event.target
			if (target instanceof Node && rootRef.current?.contains(target)) {
				return
			}
			setOpen(false)
		}

		document.addEventListener('pointerdown', handlePointerDown)
		return () => document.removeEventListener('pointerdown', handlePointerDown)
	}, [open])

	useEffect(() => {
		if (disabled) {
			setOpen(false)
		}
	}, [disabled])

	const getIconLeft = () => {
		if (!props?.iconLeft) {
			return null
		}

		return (
			<div
				style={{
					position: 'absolute',
					left: '0px',
					top: '0px',
					height: '100%',
					color: `${props?.iconColor || '#525252'}`
				}}
				className="w-9"
			>
				<div className="flex items-center justify-center h-full w-full text-base">{props.iconLeft}</div>
			</div>
		)
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
				className="w-9"
			>
				<div className="flex items-center justify-center h-full w-full">
					{props.iconRight || (
						<motion.span
							className="inline-flex"
							animate={{rotate: open ? 180 : 0}}
							transition={reducedMotion ? instantTransition : arrowTransition}
						>
							<FaAngleDown className="size-4" aria-hidden />
						</motion.span>
					)}
				</div>
			</div>
		)
	}

	const handleOptionOnClick = (event: MouseEvent<HTMLLIElement>, value: string) => {
		event.stopPropagation()
		setSelectedValue(value)
		setOpen(false)
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
		return (
			<ul
				className={`p-2 rounded-md border border-slate-300 dark:border-slate-600 ${clsx(props.bgColor ? props.bgColor : '')}`}
			>
				{items}
			</ul>
		)
	}

	const handleMenuOnClick = (event: MouseEvent<HTMLDivElement>) => {
		if (disabled) {
			return
		}
		if (event.target instanceof Element && event.target.closest('.dropdownMenuList')) {
			return
		}
		setOpen((current) => !current)
	}

	return (
		<div
			ref={rootRef}
			onClick={handleMenuOnClick}
			className={`relative ${props.iconLeft ? 'pl-10' : 'pl-3'} pr-10 rounded-md flex items-center dropDownMenuComponent ${clsx(
				props.classes,
				props.bgColor ? props.bgColor : '',
				props.bgColorHover ? props.bgColorHover : '',
				props.textColorLightMode ? props.textColorLightMode : ' text-black',
				props.textColorDarkMode ? props.textColorDarkMode : 'dark:text-white',
				props.textColorHoverLightMode ? props.textColorHoverLightMode : 'hover:text-black',
				props.textColorHoverDarkMode ? props.textColorHoverDarkMode : 'dark:hover:text-white',
				[
					`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
					`${disabled && 'opacity-70 dropdownDisabledState'}`,
					`${open && !disabled ? 'focusState' : ''}`
				]
			)}`}
			style={{height: `${height || 40}px`, width: `${width || 220}px`, maxWidth: '100%'}}
		>
			{getIconLeft()}
			<span className="truncate w-full" title={selectedValue || 'Click to select an option...'}>
				{selectedValue || 'Click to select an option...'}
			</span>
			{getIconRight()}
			<AnimatePresence>
				{open ? (
					<motion.div
						key="dropdown-menu"
						className="dropdownMenuList absolute w-full h-auto max-h-96 dropdown"
						style={{top: `${height + 10}px`, left: 0, zIndex: 1000, overflow: 'auto', transformOrigin: 'top center'}}
						initial={{opacity: 0, scaleY: 0.85}}
						animate={{opacity: 1, scaleY: 1}}
						exit={{opacity: 0, scaleY: 0.85}}
						transition={menuTransition}
					>
						{renderedOptions()}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	)
}
