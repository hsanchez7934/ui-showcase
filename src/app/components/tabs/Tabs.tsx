import './styles.css'
import React, {useState} from 'react'

export interface TabItem {
	label: string
	content: React.ReactNode
}

interface TabsProps {
	tabs: TabItem[]
	initialIndex?: number
}

export const Tabs: React.FC<TabsProps> = ({tabs, initialIndex = 0}) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex)

	return (
		<div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[310px] md:w-[400px] md:h-[320px] lg:w-[450px] lg:h-[360px] xl:w-[500px] xl:h-[380px] 2xl:h-[420px]">
			<div className="tab-headings">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`tab-heading ${activeIndex === index ? 'active' : ''} p-3 h-full w-[120px] md:w-[150px] lg:w-[170px] xl:w-[190px] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black dark:text-white`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="tab-content text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
				{tabs[activeIndex].content}
			</div>
		</div>
	)
}
