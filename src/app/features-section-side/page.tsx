'use client'

import './styles.css'
import image from '../../../public/features_side.jpg'
import {LuBell} from 'react-icons/lu'
import {FaPeopleGroup} from 'react-icons/fa6'
import {FaRegCopyright} from 'react-icons/fa'
import FadeInSection from '../components/motion/FadeInSection'
import PageHeader from '../components/motion/PageHeader'

const iconStyles = {
	color: '#4f39f6',
	fontSize: '24px'
}

const links = [
	{
		id: 'faster_downloads',
		icon: <LuBell style={iconStyles} />,
		title: 'Faster downloads',
		content: `Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.`
	},
	{
		id: 'convenience_teams',
		icon: <FaPeopleGroup style={iconStyles} />,
		title: 'Convenience for teams',
		content: `Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.`
	},
	{
		id: 'royalty_free_license',
		icon: <FaRegCopyright style={iconStyles} />,
		title: 'Royalty-free licensing',
		content: `Our straightforward, royalty-free licensing means your chosen images
        are yours to innovate with, without the hassle of negotiating usage rights for ever new project.`
	}
]

export default function FeaturesSectionSidePage() {
	return (
		<div className="h-dvh pt-[130px] px-6 pb-[100px]">
			<PageHeader
				eyebrow="Best-in-class support"
				title="Convenience and licensing that empowers"
				description={`In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.`}
				eyebrowClassName="text-indigo-600 text-center text-lg mb-5"
			/>

			<div id="features-section-side-grid-container">
				<FadeInSection direction="up" distance={32} className="mt-20 mb-20 mx-auto w-full max-w-[1000px]">
					<div
						style={{
							backgroundImage: `url(${image.src})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							minHeight: '500px',
							maxHeight: '700px',
							borderRadius: '10px',
							boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
							width: '100%'
						}}
					/>
				</FadeInSection>

				<div id="features-section-side-links-container" className="pb-10">
					{links.map(({id, icon, title, content}, index) => (
						<FadeInSection
							key={id}
							direction={index % 2 === 0 ? 'left' : 'right'}
							distance={28}
							delay={index * 0.08}
							className="flex mb-8"
						>
							<div className="w-auto flex justify-center items-start md:pt-[80px] md:pl-[50px]">
								<div className="p-4 rounded-full shadow-sm dark:shadow-blue-200">{icon}</div>
							</div>
							<div className="grow pl-9 pt-3 md:pt-[92px]">
								<h3 className="font-bold text-2xl mb-5">{title}</h3>
								<p>{content}</p>
							</div>
						</FadeInSection>
					))}
				</div>
			</div>
		</div>
	)
}
