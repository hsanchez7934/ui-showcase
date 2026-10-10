'use client'

import Link from 'next/link'
import {useRouter, useSearchParams} from 'next/navigation'
import {ComponentType} from 'react'
import {isPlaygroundId, playgroundComponents, PlaygroundId} from './catalog'
import {BadgeDemo} from './demos/BadgeDemo'
import {ButtonDemo} from './demos/ButtonDemo'
import {CheckboxDemo} from './demos/CheckboxDemo'
import {DropdownDemo} from './demos/DropdownDemo'
import {PaginationDemo} from './demos/PaginationDemo'
import {RadioCardsDemo} from './demos/RadioCardsDemo'
import {TabsDemo} from './demos/TabsDemo'
import {TextareaDemo} from './demos/TextareaDemo'
import {TextInputDemo} from './demos/TextInputDemo'
import {ToastDemo} from './demos/ToastDemo'
import {TooltipDemo} from './demos/TooltipDemo'

const demos: Record<PlaygroundId, ComponentType> = {
	button: ButtonDemo,
	badge: BadgeDemo,
	checkbox: CheckboxDemo,
	dropdown: DropdownDemo,
	pagination: PaginationDemo,
	'radio-cards': RadioCardsDemo,
	tabs: TabsDemo,
	'text-input': TextInputDemo,
	textarea: TextareaDemo,
	toast: ToastDemo,
	tooltip: TooltipDemo
}

export default function PlaygroundShell() {
	const router = useRouter()
	const params = useSearchParams()
	const requested = params.get('component')
	const active: PlaygroundId = isPlaygroundId(requested) ? requested : 'button'
	const current = playgroundComponents.find((item) => item.id === active) ?? playgroundComponents[0]
	const Demo = demos[active]

	return (
		<main className="min-h-dvh bg-slate-50 px-4 pt-24 pb-16 sm:px-6 dark:bg-black">
			<div className="mx-auto max-w-6xl">
				<header className="mb-8 max-w-3xl">
					<p className="mb-2 text-sm font-medium text-indigo-600">Components</p>
					<h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
						Component Playground
					</h1>
					<p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
						Try the interactive primitives in this library. Pick a component, change its options, and use it
						the way it appears in a product.
					</p>
				</header>

				<label className="mb-6 flex flex-col gap-1.5 text-sm font-medium text-slate-700 lg:hidden dark:text-slate-300">
					Component
					<select
						className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
						value={active}
						onChange={(event) => {
							router.replace(`/playground?component=${event.target.value}`, {scroll: false})
						}}
					>
						{playgroundComponents.map((item) => (
							<option key={item.id} value={item.id}>
								{item.label}
							</option>
						))}
					</select>
				</label>

				<div className="grid items-start gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
					<nav aria-label="Components" className="sticky top-24 hidden lg:block">
						<ul className="flex flex-col gap-1">
							{playgroundComponents.map((item) => {
								const isActive = item.id === active
								return (
									<li key={item.id}>
										<Link
											href={`/playground?component=${item.id}`}
											scroll={false}
											aria-current={isActive ? 'page' : undefined}
											className={[
												'block rounded-lg px-3 py-2 text-sm transition',
												isActive
													? 'bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
													: 'text-slate-700 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900'
											].join(' ')}
										>
											{item.label}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>

					<section aria-labelledby="playground-current">
						<div className="mb-4">
							<h2 id="playground-current" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
								{current.label}
							</h2>
							<p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{current.description}</p>
						</div>
						<Demo />
					</section>
				</div>
			</div>
		</main>
	)
}
