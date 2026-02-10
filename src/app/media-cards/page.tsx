'use client'

import './styles.css'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import BlogCard from '../components/BlogCard/BlogCard'

export default function MediaCardsPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 pb-12 pt-30">
			<div className="max-w-6xl mx-auto">
				{/* Page Header */}
				<header className="mb-16">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Media Cards
					</h1>
					<p className="max-w-2xl text-gray-600 dark:text-gray-400">
						A collection of reusable media card components designed for modern web applications.
						These cards are commonly used to present people, content, and social proof in a visually
						consistent and scalable way.
					</p>
				</header>

				{/* Profile Card Section */}
				<section className="mb-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div>
							<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
								Profile Card
							</h2>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								Profile cards are typically used to showcase individuals such as team members,
								speakers, or creators. They often include a profile image, role or title, a short
								description, and links to social platforms or contact actions.
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								Common use cases include “Meet the Team” pages, author bios, and personal portfolio
								sections.
							</p>
						</div>

						<ProfileCard
							name="Sarah Dole"
							title="Front End Engineer @ Microsoft"
							description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
							imgSrc="https://picsum.photos/id/95/100/100"
						/>
					</div>
				</section>

				{/* Testimonial Card Section */}
				<section className="mb-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<TestimonialCard
							imgSrc="https://picsum.photos/id/95/50/50"
							titleText="Sarah Dole"
							username="sarahdole"
							bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
						/>

						<div>
							<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
								Testimonial Card
							</h2>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								Testimonial cards are used to display user feedback, reviews, or social proof. They
								help build trust by highlighting real voices and experiences from users or
								customers.
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								These cards are commonly found on landing pages, marketing sites, and product pages
								to reinforce credibility.
							</p>
						</div>
					</div>
				</section>

				{/* Blog Card Section */}
				<section>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div>
							<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
								Blog Card
							</h2>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								Blog cards are designed to preview written content such as blog posts, articles, or
								case studies. They typically include a cover image, title, short excerpt, and
								metadata like tags or categories.
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								They’re often used in content feeds, resource libraries, or editorial sections of an
								application.
							</p>
						</div>

						<BlogCard
							imgSrc="https://picsum.photos/id/95/400/200"
							titleText="Lorem ipsum dolor sit amet consectetur adipiscing elit."
							bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
							badgeData={[]}
						/>
					</div>
				</section>
			</div>
		</div>
	)
}
