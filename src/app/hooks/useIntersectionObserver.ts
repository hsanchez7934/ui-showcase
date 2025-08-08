import React from 'react'

const useIntersectionObserver = () => {
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in')
						observer.unobserve(entry.target)
					}
				})
			},
			{threshold: 0.1}
		)

		const targets = document.querySelectorAll('.desc_text_container, .blog-card-fade-in')
		targets.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}

export default useIntersectionObserver
