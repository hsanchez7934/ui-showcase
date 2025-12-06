import image from '../../../public/abstract-background.jpg'

export default function NotFoundPage() {
	return (
		<div
			className="h-lvh flex items-center justify-center sm:justify-start"
			style={{
				backgroundImage: `url(${image.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<div className="px-20">
				<p className="text-indigo-700 font-bold mb-3">Not Found</p>
				<h1 className="text-5xl font-bold text-slate-800 mb-3">{`We can't find the page`}</h1>
				<p className="text-slate-800 text-xl mb-7">{`Sorry, the page you are looking for doesn't exist or has been moved.`}</p>
				<div className="">
					<button
						className={[
							'rounded-md bg-indigo-500 p-5 text-xl',
							'w-full sm:w-[200px] cursor-pointer ',
							'hover:bg-indigo-600 text-white'
						].join(' ')}
					>
						Back to Home
					</button>
				</div>
			</div>
		</div>
	)
}
