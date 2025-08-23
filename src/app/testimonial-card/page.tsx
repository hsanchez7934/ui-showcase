'use client'

import './styles.css'
import React from 'react'
import PageMainBox from '../components/page-main-box/PageMainBox'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'

const testimonialCardData = [
	{
		imgSrc: 'https://picsum.photos/id/95/50/50',
		titleText: 'Sarah Dole',
		userName: 'sarahdole',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/55/50/50',
		titleText: 'Emma Denton',
		userName: 'emmadenton',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/25/50/50',
		titleText: 'Mahesh Koirala',
		userName: 'mkoirala',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/35/50/50',
		titleText: 'Brittany Smith',
		userName: 'bsmith',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/37/50/50',
		titleText: 'Sean Cole',
		userName: 'sean_cole',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/17/50/50',
		titleText: 'Lexy Vasquez',
		userName: 'lexyLex',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/61/50/50',
		titleText: 'Trevor Barker',
		userName: 'tbarker',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	},
	{
		imgSrc: 'https://picsum.photos/id/10/50/50',
		titleText: 'Rusty Shackleford',
		userName: 'rusty_shackleford',
		bodyText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.'
	}
]

const cardContentDataList = [
	{
		text: 'Quote or Feedback: A short, direct quote from the user praising a product, service, or experience.'
	},
	{text: 'User Info: Name, job title or role (optional), company or affiliation (optional)'},
	{text: 'User image or avatar (optional but adds credibility)'},
	{text: 'Rating: Star rating or thumbs-up, sometimes included for review-style testimonials.'},
	{
		text: 'Decorative elements: Quotation marks, borders, icons, logos or backgroud patterns to enhance visual impact.'
	}
]

const cardPurposeDataList = [
	{
		text: 'Build trust and credibility: Social proof shows that real people have had positive experiences.'
	},
	{
		text: 'Improve conversion rates: Especially on marketing and product pages, testimonials help reduce hesitation for new users.'
	},
	{
		text: 'Humanize the brand: By featuring real voices and faces, businesses appear more relatable and authentic.'
	},
	{
		text: 'Highlight use cases or benefits: Testimonials often naturally showcase specific features or outcomes of using the product/service.'
	}
]

const cardUsefulnessDataList = [
	{text: 'From the users perspective, testimonials cards help in decision making by offering unbiased insight.'},
	{text: 'They give a sense of community or customer satisfaction.'},
	{text: 'Allows users to highlight real-world scenarios of how the product or service works.'},
	{text: 'They also help to reassure new users that others have had a positive experience.'}
]

interface TestimonialCardProps {
	imgSrc: string
	titleText: string
	userName: string
	bodyText: string
}

export default function TestimonialCardPage() {
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in')
						observer.unobserve(entry.target)
					}
				})
			},
			{threshold: 0.1}
		)

		const targets = document.querySelectorAll('.desc_text_container, .testimonial-card-fade-in')
		targets.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])

	const renderedTestimonialCardBlock = (cards: TestimonialCardProps[]) => {
		const renderedCards = cards.map(
			({imgSrc, titleText, userName, bodyText}: TestimonialCardProps, index: number) => {
				return (
					<div
						className="border-none bg-inherit testimonial-card-fade-in"
						key={imgSrc}
						style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
					>
						<TestimonialCard
							imgSrc={imgSrc}
							titleText={titleText}
							username={userName}
							bodyText={bodyText}
						/>
					</div>
				)
			}
		)

		return (
			<div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-evenly py-15 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40">
				{renderedCards}
			</div>
		)
	}

	const renderedTextBlock = (text: string, list: {text: string}[] = [], listTitle: string = '') => {
		if (list.length > 0) {
			return (
				<div className="desc_text_container text-base sm:text-md md:text-xl lg:text-2xl">
					<p className="mb-5">{listTitle}</p>
					<ul className="pl-5">
						{list.map(({text}: {text: string}, index) => {
							return (
								<li key={index} className="list-disc">
									{text}
								</li>
							)
						})}
					</ul>
				</div>
			)
		}

		return (
			<div className="desc_text_container">
				<p className="text-center w-[60%] m-0 text-base sm:text-md md:text-xl lg:text-2xl">
					{text}
				</p>
			</div>
		)
	}

	return (
		<PageMainBox pageTitle="Testimonial Card">
			<div className="h-full flex flex-col px-5 pb-10 pt-0">
				<div className="mb-10 px-12">
					{renderedTextBlock(
						`Testimonial cards are compact UI components used to display feedback, reviews, or endorsements from real users,
						customers, or clients. They're typically styled as individual "cards" to keep the information
						organized and visually appealing.`
					)}

					{renderedTestimonialCardBlock(testimonialCardData.slice(0, 3))}

					{renderedTextBlock('', cardContentDataList, 'What Do They Typically Contain?')}

					{renderedTestimonialCardBlock(testimonialCardData.slice(3, 6))}

					{renderedTextBlock('', cardPurposeDataList, 'Why Use Testimonial Cards?')}

					{renderedTestimonialCardBlock(testimonialCardData.slice(6))}

					{renderedTextBlock('', cardUsefulnessDataList, 'How Useful Are They?')}
				</div>
			</div>
		</PageMainBox>
	)
}
