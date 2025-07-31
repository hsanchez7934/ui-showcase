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
	return (
		<PageMainBox pageTitle="Blog Card">
			<div className="h-full flex flex-col px-5 pb-10 pt-0">
				<div className="mb-10 px-12 flex flex-col xl:flex-row gap-5">
					<div className="xl:w-[33.333333%] xl:p-15 xl:shadow-md xl:rounded-xl xl:dark:shadow-white">
						<p className="m-0 text-base sm:text-md md:text-xl lg:text-2xl">
							Blog cards are compact visual summaries of blog posts, typically used on websites or
							in app interfaces to showcase multiple articles in a grid or list format.
						</p>
					</div>
					<div className="xl:w-[33.333333%] xl:p-15 xl:shadow-md xl:rounded-xl xl:dark:shadow-white">
						<div className="flex flex-col items-center justify-center text-base sm:text-md md:text-xl lg:text-2xl">
							<p className='mb-5'>Each card usually includes:</p>
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
					</div>
					<div className="xl:w-[33.333333%] xl:p-15 xl:shadow-md xl:rounded-xl xl:dark:shadow-white">
						<p className="m-0 text-base sm:text-md md:text-xl lg:text-2xl">
							They help users quickly scan and choose which articles to read, and are a common UI
							pattern in modern web design.
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-evenly">
					{blogCardData.map(({imgSrc}: {imgSrc: string}) => {
						return (
							<div className="border-none bg-inherit" key={imgSrc}>
								<BlogCard
									imgSrc={imgSrc}
									badgeData={[
										{text: 'Lorem ipsum', type: 'brand'}
									]}
									width={300}
									height={300}
									titleText="Lorem ipsum dolor sit amet consectetur adipiscing asdfjkajdslkfjadslk"
									bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
								/>
							</div>
						)
					})}
				</div>
			</div>
		</PageMainBox>
	)
}
