'use client'

import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import BlogCard from '../components/BlogCard/BlogCard'
import FadeInSection from '../components/motion/FadeInSection'

export default function MediaCardsPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 pb-12 pt-30">
			<div className="max-w-6xl mx-auto">
				{/* Page Header */}
				<FadeInSection>
					<header className="mb-16">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Media Cards
						</h1>
						<p className="max-w-2xl text-gray-600 dark:text-gray-400">
							A collection of reusable media card components designed for modern web applications.
							These cards are commonly used to present people, content, and social proof in a
							visually consistent and scalable way.
						</p>
					</header>
				</FadeInSection>

				{/* Profile Card */}
				<FadeInSection delay={0.1}>
					<section className="mb-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div>
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
									Profile Card
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									Profile cards are typically used to showcase individuals such as team members,
									speakers, or creators.
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									Common use cases include “Meet the Team” pages, author bios, and personal
									portfolio sections.
								</p>
							</div>

							<ProfileCard
								name="Sarah Dole"
								title="Front End Engineer @ Microsoft"
								description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex."
								imgSrc="https://picsum.photos/id/95/100/100"
							/>
						</div>
					</section>
				</FadeInSection>

				{/* Testimonial Card */}
				<FadeInSection delay={0.15}>
					<section className="mb-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<TestimonialCard
								imgSrc="https://picsum.photos/id/95/50/50"
								titleText="Sarah Dole"
								username="sarahdole"
								bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex."
							/>

							<div>
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
									Testimonial Card
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									Testimonial cards highlight user feedback, reviews, and social proof to build
									trust and credibility.
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									They’re commonly used on landing pages and product marketing sections.
								</p>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* Blog Card */}
				<FadeInSection delay={0.2}>
					<section>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div>
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
									Blog Card
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									Blog cards preview articles, posts, and long-form content with a strong visual
									hierarchy.
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									They’re ideal for content feeds, blogs, and editorial sections.
								</p>
							</div>

							<BlogCard
								imgSrc="https://picsum.photos/id/95/400/200"
								titleText="Lorem ipsum dolor sit amet consectetur adipiscing elit."
								bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex."
								badgeData={[]}
							/>
						</div>
					</section>
				</FadeInSection>
			</div>
		</div>
	)
}
