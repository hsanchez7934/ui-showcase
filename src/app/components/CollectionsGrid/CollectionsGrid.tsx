import './styles.css'
import Image from 'next/image'

interface Props {
	collectionsData: any
}

export default function CollectionsGrid(props: Props) {
	const {collectionsData} = props
	console.log(collectionsData)
	return (
		<div id="collections-grid-main">
			<h1 className="px-5 my-4 font-bold text-black dark:text-white text-2xl">Our Collections</h1>
			<div style={{width: '100%'}}>
				<div id="mobileViewContent" className="md:hidden flex flex-col items-center px-5">
					<div className="rounded-lg relative inline-block mb-10">
						<Image
							src={collectionsData[0]?.image_url}
							alt="image"
							width={768}
							height={700}
							className="object-cover rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection pb-5">
							<div className="flex flex-col justify-end self-stretch">
								<span className="font-normal text-sm text-white">{collectionsData[0]?.name}</span>
								<span className="font-medium text-lg text-white">
									{collectionsData[0]?.description}
								</span>
							</div>
						</div>
					</div>

					<div className="rounded-lg relative inline-block mb-10">
						<Image
							src={collectionsData[1]?.image_url}
							alt="image"
							width={768}
							height={420}
							className="object-cover rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 flex flex-col justify-end gap-7 px-6 w-full rounded-bl-lg rounded-br-lg backgroundFilterCollection pb-5">
							<div className="flex flex-col justify-end self-stretch">
								<span className="font-normal text-sm text-white">{collectionsData[1]?.name}</span>
								<span className="font-medium text-lg text-white">
									{collectionsData[1]?.description}
								</span>
							</div>
						</div>
					</div>

					<div className="rounded-lg relative inline-block mb-10">
						<Image
							src={collectionsData[2]?.image_url}
							alt="image"
							width={768}
							height={420}
							className="object-cover rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 flex flex-col justify-end gap-7 w-full px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection pb-5">
							<div className="flex flex-col justify-end self-stretch">
								<span className="font-normal text-sm text-white">{collectionsData[2]?.name}</span>
								<span className="font-medium text-lg text-white">
									{collectionsData[2]?.description}
								</span>
							</div>
						</div>
					</div>
				</div>

				<div id="collectionsDesktopView" className="hidden md:flex h-[100vh]">
					<div
						id="collectionsGridLeft"
						className="h-[100vh] w-1/2 flex justify-center items-center pb-5 pr-4"
					>
						<div className={`h-[100%] w-[95%] rounded-2xl relative`}>
							<Image
								src={collectionsData[0]?.image_url}
								alt="image"
								width={768}
								height={420}
								className="object-cover rounded-lg h-full w-full"
							/>
							<div className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 py-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection">
								<div className="flex flex-col justify-end self-stretch">
									<span className="font-normal text-sm text-white">{collectionsData[0]?.name}</span>
									<span className="font-medium text-lg text-white">
										{collectionsData[0]?.description}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div
						id="collectionsGridRight"
						className="h-[100vh] w-1/2 flex gap-7 pb-12 pr-4 flex-col rounded-2xl"
					>
						<div className="h-1/2 w-full relative">
							<Image
								src={collectionsData[1]?.image_url}
								alt="image"
								width={768}
								height={420}
								className="object-cover rounded-lg h-full w-full"
							/>
							<div className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 py-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection">
								<div className="flex flex-col justify-end self-stretch">
									<span className="font-normal text-sm text-white">{collectionsData[1]?.name}</span>
									<span className="font-medium text-lg text-white">
										{collectionsData[1]?.description}
									</span>
								</div>
							</div>
						</div>
						<div className="h-1/2 w-full relative">
							<Image
								src={collectionsData[2]?.image_url}
								alt="image"
								width={768}
								height={420}
								className="object-cover rounded-lg h-full w-full"
							/>
							<div className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 py-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection">
								<div className="flex flex-col justify-end self-stretch">
									<span className="font-normal text-sm text-white">{collectionsData[2]?.name}</span>
									<span className="font-medium text-lg text-white">
										{collectionsData[2]?.description}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
