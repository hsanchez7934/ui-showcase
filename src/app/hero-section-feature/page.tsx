import image from '../../../public/prism.png'
import './styles.css'
import {IoCheckmarkCircleOutline} from 'react-icons/io5'

const bullets = [
	{text: 'Minimum 5K image resolution'},
	{text: 'Various format variants available'},
	{text: 'Retina display support'}
]

export default function HeroSectionFeature() {
	return (
		<div className="h-dvh pt-[130px] px-6 xl:w-max xl:ml-auto xl:mr-auto">
			<div id="hero-section-feature-bullets-grid-container">
				<div className="mb-6 sm:mb-0">
					<h1 className="font-bold text-4xl mb-10 md:text-5xl lg:text-6xl">Premium abstract images</h1>
					{bullets.map((bullet, index) => {
						return (
							<div key={index} className="flex items-center gap-3 text-xl mb-5">
								<div>
									<IoCheckmarkCircleOutline style={{color: '#4338CA'}} />
								</div>
								<div>
									<p>{bullet.text}</p>
								</div>
							</div>
						)
					})}

					<div className="flex gap-5 items-center justify-center mt-9 mb-9 sm:justify-start">
						<button
							className={[
								'bg-white text-slate-800 rounded-sm py-3 px-9 md:px-10 shadow-md',
								' hover:bg-slate-100 hover:cursor-pointer'
							].join(' ')}
						>
							Learn More
						</button>
						<button
							className={[
								'bg-indigo-700 text-white rounded-sm py-3 px-9 md:px-10',
								'hover:bg-indigo-500 hover:cursor-pointer'
							].join(' ')}
						>
							See Pricing
						</button>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(${image.src})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						minHeight: '500px',
						maxHeight: '700px',
						borderRadius: '10px',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: '100%',
						maxWidth: '1000px'
					}}
				/>
			</div>
		</div>
	)
}
