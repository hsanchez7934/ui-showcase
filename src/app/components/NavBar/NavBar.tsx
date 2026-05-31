'use client'

import './styles.css'
import IconButton from '@mui/material/IconButton'
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion'
import {FaBars, FaX} from 'react-icons/fa6'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import clsx from 'clsx'
import {
	instantTransition,
	navLinkVariants,
	springDrawer,
	staggerContainerVariants
} from '../motion/motionConfig'

const links = [
	{href: '/not-found', text: '404 Page'},
	{href: '/collections-grid', text: 'Collections Grid'},
	{href: '/features-section-grid', text: 'Features (Grid)'},
	{href: '/features-section-side', text: 'Features (Side)'},
	{href: '/hero-section-feature', text: 'Hero (Feature)'},
	{href: '/media-cards', text: 'Media Cards'},
	{href: '/pricing-section', text: 'Pricing Section'},
	{href: '/teams-section', text: 'Teams Section'},
]

export default function NavBar() {
	const [toggleNavMenu, setToggleNavMenu] = useState(false)
	const pathname = usePathname()
	const reducedMotion = useReducedMotion()
	const drawerTransition = reducedMotion ? instantTransition : springDrawer

	const handleMenuOnClick = () => {
		setToggleNavMenu(!toggleNavMenu)
	}

	const closeMenu = () => setToggleNavMenu(false)

	return (
		<header
			className="h-[56px] flex bg-white w-full fixed items-center dark:bg-black navBarBoxShadow"
			style={{zIndex: 1000}}
		>
			<div className="h-full flex w-[50%]  items-center justify-start pl-6">
				<IconButton onClick={handleMenuOnClick} sx={{p: 0}} aria-label="Open navigation menu">
					<FaBars className="dark:text-white text-black text-2xl" />
				</IconButton>
			</div>
			<div className="flex w-[50%] items-center justify-end pr-6 text-xl">
				<Link href={'/'}>UI Showcase</Link>
			</div>

			<AnimatePresence>
				{toggleNavMenu ? (
					<motion.div
						key="nav-menu"
						className="h-screen w-full absolute flex top-0 left-0"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: reducedMotion ? 0 : 0.2}}
					>
						<motion.nav
							className="w-[250px] h-screen bg-white dark:bg-black shadow-lg"
							initial={{x: '-100%'}}
							animate={{x: 0}}
							exit={{x: '-100%'}}
							transition={drawerTransition}
						>
							<div className="w-full h-[65px] flex items-center justify-end pr-6">
								<IconButton onClick={closeMenu} sx={{p: 0}} aria-label="Close navigation menu">
									<FaX className="dark:text-white text-black text-3xl" />
								</IconButton>
							</div>
							<motion.div
								variants={staggerContainerVariants(0.1)}
								initial="hidden"
								animate="visible"
							>
								{links.map((link) => {
									const isActive = pathname === link.href

									return (
									<motion.div
										key={link.text}
										variants={navLinkVariants}
										className="w-full h-[50px] flex items-center justify-start"
										onClick={closeMenu}
									>
										<Link
											href={link.href}
											aria-current={isActive ? 'page' : undefined}
											className={clsx(
												'h-full w-full text-2xl flex items-center pl-6 transition-colors',
												isActive
													? 'border-l-4 border-indigo-600 bg-indigo-50 font-semibold text-indigo-700 dark:border-indigo-400 dark:bg-indigo-950 dark:text-indigo-300'
													: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
											)}
										>
											{link.text}
										</Link>
									</motion.div>
									)
								})}
							</motion.div>
						</motion.nav>
						<motion.div
							className="navMenuModal flex-1"
							initial={{opacity: 0}}
							animate={{opacity: 0.4}}
							exit={{opacity: 0}}
							transition={{duration: reducedMotion ? 0 : 0.25}}
							onClick={closeMenu}
							aria-hidden
						/>
					</motion.div>
				) : null}
			</AnimatePresence>
		</header>
	)
}
