import Image from 'next/image'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaXTwitter} from 'react-icons/fa6'

interface Props {
	name: string
	title: string
	description: string
	imgSrc: string
}

export default function ProfileCard({name, title, description, imgSrc}: Props) {
	return (
		<div className="rounded-md p-6 w-[300px] sm:w-[350px] md:w-[400px] bg-white shadow-lg dark:bg-gray-800">
			<div className="flex items-center justify-center">
				<Image src={imgSrc} alt="stock image" width={100} height={100} className="rounded-full" />
			</div>
			<h1 className="text-lg font-bold text-center mt-4 mb-1">{name}</h1>
			<h2 className="text-center text-gray-500 dark:text-gray-400 mb-4">{title}</h2>
			<p className="text-center text-gray-500 dark:text-gray-400 mb-4">{description}</p>
			<div className="flex items-center justify-center py-8">
				<button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full">
					Contact Me
				</button>
			</div>
			<div className="flex items-center justify-center gap-4 py-3">
				<FaLinkedin
					size={24}
					className="text-indigo-500 dark:text-gray-400 hover:text-blue-700 cursor-pointer"
				/>
				<FaGithub
					size={24}
					className="text-indigo-500 dark:text-gray-400 hover:text-gray-700 cursor-pointer"
				/>
				<RiInstagramFill
					size={24}
					className="text-indigo-500 dark:text-gray-400 hover:text-pink-500 cursor-pointer"
				/>
				<FaXTwitter
					size={24}
					className="text-indigo-500 dark:text-gray-400 hover:text-blue-500 cursor-pointer"
				/>
			</div>
		</div>
	)
}
