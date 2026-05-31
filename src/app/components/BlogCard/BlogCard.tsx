'use client'

import './styles.css'
import Badge from '@/app/components/badge/Badge'
import Button from '@/app/components/button/Button'
import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import {motion, useReducedMotion} from 'framer-motion'
import HoverLiftCard from '../motion/HoverLiftCard'
import {spring, tween} from '../motion/motionConfig'

interface Props {
	imgSrc: string
	titleText: string
	badgeData: {text: string; type: string}[]
	bodyText: string
}

export default function BlogCard(props: Props) {
	const {imgSrc, titleText, badgeData, bodyText} = props
	const reducedMotion = useReducedMotion()

	return (
		<HoverLiftCard className="blogCardWrapper w-[300px] sm:w-[350px] md:w-[400px] bg-white dark:bg-gray-800 shadow-xl overflow-hidden rounded-[10px]">
			<div className="overflow-hidden">
				<motion.div
					whileHover={reducedMotion ? undefined : {scale: 1.05}}
					transition={{...tween, duration: 0.4}}
				>
					<Image
						src={imgSrc}
						alt="Cocktail Explorer project screenshot"
						width={400}
						height={300}
						style={{borderRadius: '10px 10px 0px 0px'}}
					/>
				</motion.div>
			</div>
			<div className="p-5">
				{Array.isArray(badgeData) && badgeData.length > 0 && (
					<div className="blogCardBadgeContainer">
						{badgeData.map(({text, type}: {type: string; text: string}, index: number) => {
							return (
								<span className="w-[100px]" key={`${text}_${index}`}>
									<Badge badgeSize="small" badgeType={type} badgeText={text} />
								</span>
							)
						})}
					</div>
				)}
				<div className="blogCardContent">
					<h4 className="truncate w-full text-black dark:text-gray-200">{titleText}</h4>
					<p className="text-gray-600 dark:text-gray-400">{bodyText}</p>
					<div className="py-5 group">
						<motion.div
							whileHover={reducedMotion ? undefined : {x: 4}}
							transition={spring}
							className="inline-flex"
						>
							<Button
								buttonType="linkcolor"
								buttonSize="large"
								buttonText="Read more"
								iconPlacement="right"
								iconRight={<FaArrowRight style={{marginLeft: 15}} />}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</HoverLiftCard>
	)
}
