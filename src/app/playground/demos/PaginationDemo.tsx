'use client'

import {useState} from 'react'
import Pagination from '../../components/pagination/Pagination'
import {DemoFrame, SelectControl} from '../controls'

export function PaginationDemo() {
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState('10')
	const [maxVisiblePages, setMaxVisiblePages] = useState('5')

	const total = Number(totalPages)

	return (
		<DemoFrame
			preview={
				<div className="flex max-w-full flex-col items-center gap-4">
					<Pagination
						totalPages={total}
						currentPage={currentPage}
						maxVisiblePages={Number(maxVisiblePages)}
						prevLabel="Prev"
						nextLabel="Next"
						onPageChange={setCurrentPage}
					/>
					<p className="text-sm text-slate-500 dark:text-slate-400">
						Page {currentPage} of {total}
					</p>
				</div>
			}
			controls={
				<>
					<SelectControl
						label="Total pages"
						value={totalPages}
						onChange={(value) => {
							const nextTotal = Number(value)
							setTotalPages(value)
							setCurrentPage((page) => Math.min(page, nextTotal))
						}}
						options={[
							{value: '5', label: '5'},
							{value: '10', label: '10'},
							{value: '20', label: '20'}
						]}
					/>
					<SelectControl
						label="Visible page numbers"
						value={maxVisiblePages}
						onChange={setMaxVisiblePages}
						options={[
							{value: '3', label: '3'},
							{value: '5', label: '5'},
							{value: '7', label: '7'}
						]}
					/>
				</>
			}
		/>
	)
}
