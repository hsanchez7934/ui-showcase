import './styles.css'

interface Props {
	children: React.ReactNode
	pageTitle: string
}

export default function PageMainBox(props: Props) {
	return (
		<main className="min-h-screen pt-30 bg-white dark:bg-black flex flex-col items-center justify-start">
			<div className="h-auto">
				<h1 className="text-black dark:text-white text-center mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
					{props.pageTitle}
				</h1>
				{props.children}
			</div>
		</main>
	)
}
