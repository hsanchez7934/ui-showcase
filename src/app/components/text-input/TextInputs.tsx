'use client'

import clsx from 'clsx'
import './styles.css'
import {ReactNode} from 'react'

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
		inputSize,
		classes
	} = props

	const getInputSize = (key: string) => {
		console.log(key)
		// switch (key) {
		// 	case 'small':
		// 		return 'h-[40px] w-[300] text-base'
		// 	case 'medium':
		// 		return 'h-[50px] w-[400] text-lg'
		// 	case 'large':
		// 		return 'h-[60px] w-[500] text-xl'
		// 	default:
		// 		break
		// }
		return 'h-[40px] w-[300px] text-base sm:h-[45px] sm:w-[350px] sm:h-[45px] sm:w-[350px] lg:h-[55px] lg:w-[450] xl:h-[60px] xl:w-[500] 2xl:h-[65px] 2xl:w-[550]'
	}

	const getTextSize = (key: string) => {
		console.log(key)
		// switch (key) {
		// 	case 'small':
		// 		return 'text-base'
		// 	case 'medium':
		// 		return 'text-lg'
		// 	case 'large':
		// 		return 'text-xl'
		// 	default:
		// 		break
		// }
		return 'text-base sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
	}

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
						color: `${props?.iconColor || '#e6e6e6'}`
					}}
					className="w-10 lg:w-12 xl:w-14 2xl:w-16"
				>
					<div className="flex items-center justify-center h-full w-full text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
						{props.iconLeft}
					</div>
				</div>
			)
		}

		return markup
	}

	const getIconRight = () => {
		let markup = <></>

		if (props?.iconRight) {
			markup = (
				<div
					style={{
						position: 'absolute',
						right: '0px',
						top: '0px',
						height: '100%',
						color: `${props?.iconColor || '#e6e6e6'}`
					}}
					className="w-10 lg:w-12 xl:w-14 2xl:w-16"
				>
					<div className="flex items-center justify-center h-full w-full text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
						{props.iconRight}
					</div>
				</div>
			)
		}

		return markup
	}

	return (
		<div
			className={`flex flex-col inputDivContainer ${clsx(classes)}`}
			style={{fontFamily: 'Rubik'}}
		>
			<label htmlFor={labelForID} className={`${getTextSize(inputSize)} pb-2.5 text-neutral-600`}>
				{labelText}
			</label>
			<div className="h-auto relative">
				{getIconLeft()}
				<input
					disabled={props?.disabledState || false}
					id={inputID}
					type={inputType}
					maxLength={maxAttr}
					required={requiredState}
					title={title}
					placeholder={placeholderText}
					autoFocus={autofocusState || false}
					className={`${getInputSize(inputSize)} ${getLeftPadding()} ${getRightPadding()} ${getTextSize(inputSize)} ${clsx(classes)}`}
				/>
				{getIconRight()}
			</div>
			{props?.hintText && <p className={`text-neutral-400 ${getTextSize(inputSize)} pt-1.5`}>{props.hintText}</p>}
			{props?.errorText && <p className={`text-red-600 ${getTextSize(inputSize)} pt-1.5`}>{props.errorText}</p>}
			<div></div>
		</div>
	)
}
