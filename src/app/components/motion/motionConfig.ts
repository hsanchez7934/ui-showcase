import type {Transition, Variants} from 'framer-motion'

export const spring = {type: 'spring' as const, stiffness: 300, damping: 30}
export const springDrawer = {type: 'spring' as const, stiffness: 400, damping: 35}
export const tween = {
	duration: 0.5,
	ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
}
export const staggerDelay = 0.08
export const viewport = {once: true, margin: '-80px' as const}

export const instantTransition: Transition = {duration: 0}

export type FadeDirection = 'up' | 'down' | 'left' | 'right'

export function fadeVariants(
	distance = 24,
	direction: FadeDirection = 'up'
): Variants {
	const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
	const value = direction === 'up' || direction === 'left' ? distance : -distance

	return {
		hidden: {opacity: 0, [axis]: value},
		visible: {opacity: 1, [axis]: 0}
	}
}

export function staggerContainerVariants(
	delayChildren = 0,
	stagger = staggerDelay
): Variants {
	return {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: stagger,
				delayChildren
			}
		}
	}
}

export const staggerItemVariants: Variants = {
	hidden: {opacity: 0, y: 20},
	visible: {
		opacity: 1,
		y: 0,
		transition: tween
	}
}

export const pageTransitionVariants: Variants = {
	hidden: {opacity: 0, y: 10},
	visible: {
		opacity: 1,
		y: 0,
		transition: {...tween, duration: 0.35}
	}
}

export const navLinkVariants: Variants = {
	hidden: {opacity: 0, x: -16},
	visible: {
		opacity: 1,
		x: 0,
		transition: tween
	}
}
