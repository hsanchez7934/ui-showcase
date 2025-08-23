'use client'

import './styles.css'
import IconButton from '@mui/material/IconButton'
import {FaBars, FaX} from 'react-icons/fa6'
import Link from 'next/link'

import {useState} from 'react'

const links = [
	{href: '/blog-card', text: 'Blog Card'},
	{href: '/testimonial-card', text: 'Testimonial Card'}
]

const renderedLinks = (setToggleNavMenu: (value: boolean) => void) => {
	return links.map((link: {href: string; text: string}) => {
		return (
			<div
				key={link.text}
				className="w-full h-[50px] flex items-center justify-star"
				onClick={() => setToggleNavMenu(false)}
			>
				<Link
					href={link.href}
					className="h-full w-full text-2xl flex items-center pl-6 text-black dark:text-white hover:bg-gray-400"
				>
					{link.text}
				</Link>
			</div>
		)
	})
}

export default function NavBar() {
	const [toggleNavMenu, setToggleNavMenu] = useState(false)

	const handleMenuOnClick = () => {
		setToggleNavMenu(!toggleNavMenu)
	}

	return (
		<header
			className="min-h-20 flex bg-white w-full fixed items-center dark:bg-black navBarBoxShadow"
			style={{zIndex: 1000}}
		>
			<div className="h-full flex w-[50%]  items-center justify-start pl-6">
				<IconButton onClick={handleMenuOnClick} sx={{p: 0}}>
					<FaBars className="dark:text-white text-black text-3xl" />
				</IconButton>
			</div>
			<div className="flex w-[50%] items-center justify-end pr-6 text-xl">
				<Link href={'/'}>
					UI Showcase
				</Link>
			</div>
			<div
				className={`h-screen w-full absolute flex top-0 left-0 ${toggleNavMenu ? 'showMenu' : 'hideMenu'}`}
			>
				<nav className={`w-[250px] h-screen bg-white dark:bg-black `}>
					<div className="w-full h-[65px] flex items-center justify-end pr-6">
						<IconButton onClick={() => setToggleNavMenu(false)} sx={{p: 0}}>
							<FaX className="dark:text-white text-black text-3xl" />
						</IconButton>
					</div>
					<div>{renderedLinks(setToggleNavMenu)}</div>
				</nav>
				<div className="navMenuModal" onClick={() => setToggleNavMenu(false)}></div>
			</div>
		</header>
	)
}
