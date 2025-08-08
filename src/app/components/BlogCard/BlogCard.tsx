'use-client'

import {FaArrowRight} from 'react-icons/fa'
import Badge from '@/app/components/badge/Badge'
import './styles.css'
import Image from 'next/image'
import Button from '@/app/components/button/Button'

interface Props {
	imgSrc: string
	titleText: string
	badgeData: {text: string; type: string}[]
	width: number
	bodyText: string
}

export default function BlogCard(props: Props) {
	const {imgSrc, titleText, badgeData, width, bodyText} = props

	return (
		<div
			style={{width}}
			className="blogCardWrapper bg-white dark:bg-gray-800 shadow-xl"
		>
			<Image
				src={imgSrc}
				alt="Cocktail Explorer project screenshot"
				width={width}
				height={300}
				style={{borderRadius: '10px 10px 0px 0px'}}
			/>
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
					<div className='py-5'>
						<Button
							buttonType="linkcolor"
							buttonSize="large"
							buttonText="Read more"
							iconPlacement="right"
							iconRight={<FaArrowRight style={{marginLeft: 15}}/>}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
