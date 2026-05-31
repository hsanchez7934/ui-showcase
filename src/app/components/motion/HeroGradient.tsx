'use client'

import {motion, useReducedMotion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'

export default function HeroGradient() {
	const ref = useRef<HTMLDivElement>(null)
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ['start start', 'end start']
	})
	const y = useTransform(scrollYProgress, [0, 1], [0, 60])
	const reducedMotion = useReducedMotion()

	return (
		<div
			ref={ref}
			aria-hidden
			className="pointer-events-none absolute inset-x-0 -top-24 -z-10 blur-3xl"
		>
			<motion.div
				style={reducedMotion ? undefined : {y}}
				className="mx-auto h-64 w-[60rem] rounded-full bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-sky-200 opacity-60"
			/>
		</div>
	)
}
