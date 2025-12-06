import './styles.css'
import {FaDownload} from 'react-icons/fa6'
import {FaPaintBrush} from 'react-icons/fa'
import {FaRegCopyright} from 'react-icons/fa'
import {TiCancel} from 'react-icons/ti'
import {RiTeamLine} from 'react-icons/ri'
import {FaSuperpowers} from 'react-icons/fa6'

type Link = {
	id: string
	icon: React.ReactNode
	title: string
	content: string
}

const iconStyles = {
	color: '#4f39f6',
	fontSize: '2rem'
}

const links: Link[] = [
	{
		id: 'infinite_download',
		icon: <FaDownload style={iconStyles} />,
		title: 'Infinite Download',
		content: `Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.`
	},
	{
		id: 'purely_handcrafted',
		icon: <FaPaintBrush style={iconStyles} />,
		title: 'Purely Handcrafted',
		content: `No AI, no generic images. Crafted from various chemicals,
        fabrics, clouds, or even particles as small as dust.`
	},
	{
		id: 'under_license',
		icon: <FaRegCopyright style={iconStyles} />,
		title: 'All Are Under Licensed',
		content: `The only limitation with these abstract images is that you are not able to sell 
        them in any form, whether digital or hard copy (such as paintings or prints on paper).`
	},
	{
		id: 'cancel_anytime',
		icon: <TiCancel style={iconStyles} />,
		title: 'Cancel Anytime',
		content: `Subscribe at your own pace, and cancel when you feel it's enough.`
	},
	{
		id: 'empower_your_team',
		icon: <RiTeamLine style={iconStyles} />,
		title: 'Empowering For Teams',
		content: `We support multiple seats at once, requiring only a single payment.`
	},
	{
		id: 'no_limitations',
		icon: <FaSuperpowers style={iconStyles} />,
		title: 'No Limitations',
		content: `Use as many as you want, from Dribble presentations to Power Point presentations.`
	}
]

export default function FeaturesSectionPage() {
	return (
		<div id="features-section" className="h-dvh pt-[130px] px-6 pb-[100px]">
			<p className="text-lg text-indigo-600 text-center mb-5">Premium abstract images</p>
			<h1 className="text-4xl text-center mb-5 max-w-3xl mx-auto">Easy access to top quality images</h1>
			<p className="text-slate-700 dark:text-slate-400 text-2xl text-center max-w-3xl mx-auto">
				In a world where storytelling constantly evolves, we lead with groundbreaking images
				designed for your presentation excellence.
			</p>
			<div id="features-section-grid-container" className="pt-10 pb-12">
				{links.map(({id, icon, title, content}) => {
					return (
						<div key={id} className="p-8">
							<div className="flex items-center justify-center mb-7">
								<div className="p-5 rounded-full shadow-sm dark:shadow-blue-200">{icon}</div>
							</div>
							<h3 className="text-center font-bold text-2xl mb-5">{title}</h3>
							<p className="text-center ">{content}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
