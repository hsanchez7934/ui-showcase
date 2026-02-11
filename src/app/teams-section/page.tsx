'use client'

import {desc} from 'framer-motion/client'
import Image from 'next/image'

const teams = [
	{
		name: 'Joe Jackson',
		role: 'Founder & CEO',
		image: '/joe.jpg',
		desc: 'Joe is the visionary behind our company, leading with passion and dedication to create innovative solutions that drive success.'
	},
	{
		name: 'Ash Karter',
		role: 'Founder & CFO',
		image: '/ash.png',
		desc: 'Ash is the financial mastermind of our company, ensuring our financial health and stability while driving strategic growth and profitability.'
	},
	{
		name: 'Farias Amed',
		role: 'Front End AI Engineer',
		image: '/farias.png',
		desc: 'Farias is our front-end AI engineer, specializing in creating intelligent user interfaces that enhance user experience and streamline interactions.'
	},
	{
		name: 'Sarah Hust',
		role: 'Dev Ops',
		image: '/sarah.png',
		desc: 'Sarah is our DevOps expert, responsible for ensuring the reliability and scalability of our infrastructure while optimizing deployment processes.'
	}
]

export default function TeamsSection() {
	return (
		<div className="h-dvh pt-[100px] px-6 pb-[100px]">
			<div className='h-full max-w-7xl mx-auto flex flex-col items-center justify-start'>
				<p className="text-base text-indigo-500 text-center mb-4">Team</p>
				<h1 className="font-bold text-3xl text-center text-zinc-800 dark:text-white mb-6">
					Meet our team
				</h1>
				<p className="text-lg text-zinc-600 dark:text-white text-center mb-6">
					From skilled designers to tech-savvy devlopers, our team is a powerhouse of creativity and
					expertise. We are passionate about crafting exceptional digital experiences that captivate
					and inspire. With a blend of innovation and dedication, we bring your ideas to life,
					ensuring every project is a masterpiece of design and functionality.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-7">
					{teams.map((team, index) => (
						<div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
							<div>
								<Image
									src={team.image}
									alt={team.name}
									width={300}
									height={300}
									className="w-full h-full object-cover rounded-t-lg"
								/>
							</div>
							<h2 className="text-xl font-bold text-zinc-800 dark:text-white mt-4">{team.name}</h2>
							<p className="text-gray-600 dark:text-gray-300">{team.role}</p>
							<p className="text-gray-700 dark:text-gray-400 mt-2">{team.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
