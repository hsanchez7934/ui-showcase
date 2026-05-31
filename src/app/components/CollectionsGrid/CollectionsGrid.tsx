'use client'

import './styles.css'
import Image from 'next/image'
import {motion, useReducedMotion} from 'framer-motion'
import FadeInSection from '../motion/FadeInSection'
import StaggerContainer from '../motion/StaggerContainer'
import StaggerItem from '../motion/StaggerItem'
import {spring, tween} from '../motion/motionConfig'

interface Collection {
	collection_id: string
	name: string
	description: string
	image_url: string
	created_at: string
}

interface Props {
	collectionsData: Collection[]
}

function CollectionOverlay({name, description}: {name: string; description: string}) {
	return (
		<motion.div
			className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection pb-5 md:py-7"
			variants={{
				rest: {y: 0},
				hover: {y: -4}
			}}
			transition={tween}
		>
			<div className="flex flex-col justify-end self-stretch">
				<span className="font-normal text-sm text-white">{name}</span>
				<span className="font-medium text-lg text-white">{description}</span>
			</div>
		</motion.div>
	)
}

function InteractiveCollectionTile({
	collection,
	className = 'rounded-lg relative mb-10 w-full overflow-hidden',
	imageClassName = 'object-cover rounded-lg w-full',
	width = 768,
	height = 420
}: {
	collection: Collection
	className?: string
	imageClassName?: string
	width?: number
	height?: number
}) {
	const reducedMotion = useReducedMotion()

	if (reducedMotion) {
		return (
			<div className={className}>
				<Image
					src={collection.image_url}
					alt={collection.name}
					width={width}
					height={height}
					className={imageClassName}
				/>
				<div className="absolute bottom-0 left-0 flex flex-col justify-end w-full gap-7 px-6 rounded-bl-lg rounded-br-lg backgroundFilterCollection pb-5 md:py-7">
					<div className="flex flex-col justify-end self-stretch">
						<span className="font-normal text-sm text-white">{collection.name}</span>
						<span className="font-medium text-lg text-white">{collection.description}</span>
					</div>
				</div>
			</div>
		)
	}

	return (
		<motion.div
			className={className}
			initial="rest"
			whileHover="hover"
			whileTap={{scale: 0.995}}
			transition={spring}
		>
			<motion.div
				className="overflow-hidden rounded-lg h-full w-full"
				variants={{
					rest: {scale: 1},
					hover: {scale: 1.05}
				}}
				transition={{...tween, duration: 0.45}}
			>
				<Image
					src={collection.image_url}
					alt={collection.name}
					width={width}
					height={height}
					className={imageClassName}
				/>
			</motion.div>
			<CollectionOverlay name={collection.name} description={collection.description} />
		</motion.div>
	)
}

export default function CollectionsGrid(props: Props) {
	const {collectionsData} = props
	const [first, second, third] = collectionsData

	return (
		<div id="collections-grid-main">
			<FadeInSection className="px-5 my-4">
				<h1 className="font-bold text-black dark:text-white text-2xl">Our Collections</h1>
			</FadeInSection>
			<div style={{width: '100%'}}>
				<StaggerContainer
					id="mobileViewContent"
					className="md:hidden flex flex-col items-center px-5"
				>
					{first ? (
						<StaggerItem className="w-full">
							<InteractiveCollectionTile collection={first} height={700} />
						</StaggerItem>
					) : null}
					{second ? (
						<StaggerItem className="w-full">
							<InteractiveCollectionTile collection={second} />
						</StaggerItem>
					) : null}
					{third ? (
						<StaggerItem className="w-full">
							<InteractiveCollectionTile collection={third} />
						</StaggerItem>
					) : null}
				</StaggerContainer>

				<div id="collectionsDesktopView" className="hidden md:flex h-[100vh]">
					<FadeInSection
						direction="left"
						distance={32}
						className="h-[100vh] w-1/2 flex justify-center items-center pb-5 pr-4"
					>
						<div id="collectionsGridLeft" className="h-[100%] w-[95%]">
							{first ? (
								<InteractiveCollectionTile
									collection={first}
									className="rounded-2xl relative h-full w-full overflow-hidden"
									imageClassName="object-cover rounded-lg h-full w-full"
								/>
							) : null}
						</div>
					</FadeInSection>

					<StaggerContainer
						id="collectionsGridRight"
						className="h-[100vh] w-1/2 flex gap-7 pb-12 pr-4 flex-col rounded-2xl"
					>
						{second ? (
							<StaggerItem className="h-1/2 w-full">
								<InteractiveCollectionTile
									collection={second}
									className="rounded-lg relative h-full w-full overflow-hidden"
									imageClassName="object-cover rounded-lg h-full w-full"
								/>
							</StaggerItem>
						) : null}
						{third ? (
							<StaggerItem className="h-1/2 w-full">
								<InteractiveCollectionTile
									collection={third}
									className="rounded-lg relative h-full w-full overflow-hidden"
									imageClassName="object-cover rounded-lg h-full w-full"
								/>
							</StaggerItem>
						) : null}
					</StaggerContainer>
				</div>
			</div>
		</div>
	)
}
