'use client'

import clsx from 'clsx'
import './styles.css'
import {ReactNode, useEffect, useState} from 'react'
import {FaEnvelope, FaEye, FaEyeSlash, FaLock, FaMagnifyingGlass, FaXmark} from 'react-icons/fa6'

// The text input component should support the following features:

// States: Default, Focused, Error, Disabled.
// Icons: Icons can either be on the left, right, or both.
// Help text / error message: Configurable help text or error message.

// Icon placement
// Rendering the icons within the <input> is possibly the trickiest part of the challenge.
// We can't render <svg>s within an <input> because it does not accept any children,
// but we can play with CSS positioning to achieve the desired visual result.

// Accessibility
// Link <label> with <input> with htmlFor and id.
// Link hint text / error message to <input> with aria-described-by.

// Focus state shadow
// Creating the focus state involves using a box-shadow:

type InputType =
	| string
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'

type AutoComplete = string | 'on' | 'off'

type InputSize = string | 'small' | 'medium' | 'large'

interface Props {
	title: string
	inputType: InputType
	labelText: string
	labelForID: string
	disabledState?: boolean
	placeholderText: string
	hintText: string
	iconRight?: ReactNode
	iconLeft?: ReactNode
	iconPlacement?: string | 'left' | 'right' | 'both'
	errorText: string
	acceptAttr?: string
	altAttr?: string
	autocapitalizeState?: boolean
	autocompleteState?: AutoComplete
	autofocusState?: boolean
	checkedState?: boolean
	formID?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	height?: string
	listAttr?: string
	maxAttr?: number
	maxLengthAttr?: number
	minAttr?: number
	minLengthAttr?: number
	multipleState?: boolean
	nameAttr?: string
	patternAttr?: string
	readOnlyState?: boolean
	requiredState?: boolean
	sizeAttr?: string
	srcAttr?: string
	stepAttr?: string
	typeAttr?: string
	valueAttr?: string
	width?: string
	inputID?: string
	inputName?: string
	inputSize: InputSize
	classes?: string
	iconColor?: string
	showLeftIcon?: boolean
}

export default function TextInputs(props: Props) {
	const {
		labelText,
		labelForID,
		inputID,
		inputType,
		maxAttr,
		requiredState,
		title,
		placeholderText,
		autofocusState,
		classes,
		showLeftIcon = true
	} = props
	const [value, setValue] = useState(props.valueAttr ?? '')
	const [passwordVisible, setPasswordVisible] = useState(false)

	useEffect(() => {
		setPasswordVisible(false)
	}, [inputType])

	const isPassword = inputType === 'password'
	const canClear = (inputType === 'text' || inputType === 'email') && value.length > 0
	const leftIcon = showLeftIcon ? (props.iconLeft ?? defaultLeftIcon(inputType)) : null
	const hasRightAction = isPassword || canClear || Boolean(props.iconRight)
	const iconStyle = props.iconColor ? {color: props.iconColor} : undefined

	return (
		<div className={`inputDivContainer flex flex-col ${clsx(classes)}`}>
			<label htmlFor={labelForID} className="inputLabel text-slate-700 dark:text-slate-200">
				{labelText}
			</label>
			<div className="relative">
				{leftIcon ? (
					<div className="inputIcon inputIconLeft" style={iconStyle}>
						{leftIcon}
					</div>
				) : null}
				<input
					disabled={props?.disabledState || false}
					id={inputID}
					type={isPassword && passwordVisible ? 'text' : inputType}
					maxLength={maxAttr}
					required={requiredState}
					title={title}
					placeholder={placeholderText}
					autoFocus={autofocusState || false}
					value={value}
					onChange={(event) => setValue(event.target.value)}
					className={`inputField ${leftIcon ? 'hasLeftIcon' : ''} ${hasRightAction ? 'hasRightIcon' : ''} ${
						props.errorText ? 'inputFocusError' : 'inputFocusNormal'
					} ${clsx(classes)}`}
				/>
				{isPassword ? (
					<button
						type="button"
						className="inputIconButton"
						style={iconStyle}
						aria-label={passwordVisible ? 'Hide password' : 'Show password'}
						aria-pressed={passwordVisible}
						disabled={props?.disabledState || false}
						onMouseDown={(event) => event.preventDefault()}
						onClick={() => setPasswordVisible((current) => !current)}
					>
						{passwordVisible ? <FaEyeSlash className="size-4" aria-hidden /> : <FaEye className="size-4" aria-hidden />}
					</button>
				) : null}
				{canClear ? (
					<button
						type="button"
						className="inputIconButton"
						style={iconStyle}
						aria-label="Clear"
						disabled={props?.disabledState || false}
						onMouseDown={(event) => event.preventDefault()}
						onClick={() => setValue('')}
					>
						<FaXmark className="size-4" aria-hidden />
					</button>
				) : null}
				{!isPassword && !canClear && props.iconRight ? (
					<div className="inputIcon inputIconRight" style={iconStyle}>
						{props.iconRight}
					</div>
				) : null}
			</div>
			{props?.hintText && (
				<p className="inputHint text-slate-500 dark:text-slate-400">{props.hintText}</p>
			)}
			{props?.errorText && <p className="inputHint text-red-600 dark:text-red-400">{props.errorText}</p>}
		</div>
	)
}

function defaultLeftIcon(inputType: string) {
	if (inputType === 'password') {
		return <FaLock className="size-4" aria-hidden />
	}
	if (inputType === 'email') {
		return <FaEnvelope className="size-4" aria-hidden />
	}
	if (inputType === 'text') {
		return <FaMagnifyingGlass className="size-4" aria-hidden />
	}
	return null
}
