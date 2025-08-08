'use client'

import './styles.css'
import React from 'react'
import PageMainBox from '../components/page-main-box/PageMainBox'
import BlogCard from '../components/BlogCard/BlogCard'

const blogCardData = [
	{imgSrc: 'https://picsum.photos/400/300'},
	{imgSrc: 'https://picsum.photos/id/237/400/300'},
	{imgSrc: 'https://picsum.photos/id/223/400/300'},
	{imgSrc: 'https://picsum.photos/id/225/400/300'},
	{imgSrc: 'https://picsum.photos/id/227/400/300'},
	{imgSrc: 'https://picsum.photos/id/228/400/300'},
	{imgSrc: 'https://picsum.photos/id/155/400/300'},
	{imgSrc: 'https://picsum.photos/id/115/400/300'}
]

const list = [
	{text: 'A title of the blog post'},
	{text: 'A featured image'},
	{text: 'A short excerpt or description'},
	{text: 'Optional metadata like author, date, or category'},
	{text: 'A link or button to read the full post'}
]

export default function BlogCardPage() {
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

		const targets = document.querySelectorAll('.desc_text_container, .blog-card-fade-in')
		targets.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])

	const renderedBlogCardBlock = (cards: {imgSrc: string}[]) => {
		const renderedCards = cards.map(({imgSrc}: {imgSrc: string}, index: number) => {
			return (
				<div
					className="border-none bg-inherit blog-card-fade-in"
					key={imgSrc}
					style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
				>
					<BlogCard
						imgSrc={imgSrc}
						badgeData={[{text: 'Lorem ipsum', type: 'brand'}]}
						width={300}
						titleText="Lorem ipsum dolor sit amet consectetur adipiscing asdfjkajdslkfjadslk"
						bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
					/>
				</div>
			)
		})

		return (
			<div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-evenly py-15 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40">
				{renderedCards}
			</div>
		)
	}

	const renderedTextBlock = (text: string, isList: boolean = false) => {
		if (isList) {
			return (
				<div className="desc_text_container text-base sm:text-md md:text-xl lg:text-2xl">
					<p className="mb-5">Each card usually includes</p>
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
		<PageMainBox pageTitle="Blog Card">
			<div className="h-full flex flex-col px-5 pb-10 pt-0">
				<div className="mb-10 px-12">
					{renderedTextBlock(
						`Blog cards are compact visual summaries of blog posts, typically used on websites or
							in app interfaces to showcase multiple articles in a grid or list format.`
					)}

					{renderedBlogCardBlock(blogCardData.slice(0, 3))}

					{renderedTextBlock('', true)}

					{renderedBlogCardBlock(blogCardData.slice(2, 5))}

					{renderedTextBlock(
						`They help users quickly scan and choose which articles to read, and are a common UI
						pattern in modern web design.`
					)}

					{renderedBlogCardBlock(blogCardData.slice(6))}
				</div>
			</div>
		</PageMainBox>
	)
}
