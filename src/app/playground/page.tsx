import type {Metadata} from 'next'
import {Suspense} from 'react'
import PlaygroundShell from './PlaygroundShell'

export const metadata: Metadata = {
	title: 'Component Playground | UI Components Showcase',
	description:
		'Interact with buttons, form controls, and feedback components from the UI Components Showcase.'
}

export default function PlaygroundPage() {
	return (
		<Suspense
			fallback={
				<main className="min-h-dvh bg-slate-50 px-6 pt-28 dark:bg-black">
					<p className="text-slate-600 dark:text-slate-400">Loading playground…</p>
				</main>
			}
		>
			<PlaygroundShell />
		</Suspense>
	)
}
