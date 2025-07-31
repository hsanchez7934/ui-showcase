import './styles.css'
import React from 'react'

interface PaginationProps {
	totalPages: number
	currentPage: number
	onPageChange: (page: number) => void
	prevLabel?: string
	nextLabel?: string
	maxVisiblePages?: number
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	onPageChange,
	prevLabel = '',
	nextLabel = '',
	maxVisiblePages = 5
}) => {
	const handleClick = (page: number) => {
		if (page >= 1 && page <= totalPages && page !== currentPage) {
			onPageChange(page)
		}
	}

	const getVisiblePages = (): number[] => {
		const half = Math.floor(maxVisiblePages / 2)
		let start = Math.max(1, currentPage - half)
		let end = Math.min(totalPages, currentPage + half)

		if (end - start + 1 < maxVisiblePages) {
			if (start === 1) {
				end = Math.min(totalPages, start + maxVisiblePages - 1)
			} else if (end === totalPages) {
				start = Math.max(1, end - maxVisiblePages + 1)
			}
		}

		const pages: number[] = []
		for (let i = start; i <= end; i++) {
			pages.push(i)
		}
		return pages
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				alignItems: 'center'
			}}
		>
			<button
				className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-[80px] md:w-[140px] xl:w-[170px] paginationBtn"
				onClick={() => handleClick(currentPage - 1)}
				disabled={currentPage === 1}
				style={{
					cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
				}}
			>
				<span>&laquo;</span>
				{prevLabel && <span>{prevLabel}</span>}
			</button>

			{getVisiblePages().map((page) => (
				<button
					className={`${page === currentPage ? 'text-white' : 'text-black dark:text-white'} text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-auto paginationBtn`}
					key={page}
					onClick={() => handleClick(page)}
					style={{
						backgroundColor: page === currentPage ? '#4f46e5' : 'transparent',
						cursor: page === currentPage ? 'default' : 'pointer'
					}}
				>
					{page}
				</button>
			))}

			<button
				className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-[80px] md:w-[140px] xl:w-[170px] paginationBtn"
				onClick={() => handleClick(currentPage + 1)}
				disabled={currentPage === totalPages}
				style={{
					cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
				}}
			>
				{nextLabel && <span>{nextLabel}</span>}
				<span>&raquo;</span>
			</button>
		</div>
	)
}

export default Pagination
