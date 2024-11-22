import { Paginator, SearchPanel, TitlesTable } from '../../../modules'
import { View } from 'react-native'
import { FC, useEffect, useState } from 'react'
import { searchAPI } from '../api/api'
import { filterType, orderType, sortDirectionType } from '../../../shared/config'
import { Preloader } from '../../../shared/ui/preloader'
export const TitlesList: FC = () => {
	const [isReady, setIsReady] = useState(false)
	const [page, setPage] = useState(0)
	const [data, setData] = useState(null as null | any)
	const [totalPages, setTotalPages] = useState(0)
	const [filter, setFilter] = useState({
		titleName: '',
		dateFrom: '',
		dateTo: '',
		score: '0'
	} as filterType)
	const [sortIndex, setSortIndex] = useState('' as orderType)
	const [sortDirection, setSortDirection] = useState('asc' as sortDirectionType)
	useEffect(() => {
		if(page !== 0) onFind()
	}, [page])
	useEffect(() => {
		if(filter.score !== '0') {
			if (page === 1) onFind()
			else setPage(1)
		}
	}, [filter])
	useEffect(() => {
		if (page === 1) onFind()
		else setPage(1)
	}, [sortDirection])
	useEffect(() => {
		if(sortIndex !== '') {
			if (sortDirection === 'desc') setSortDirection('asc')
			else {
				if (page === 1) onFind()
				else setPage(1)
			}
		}
	}, [sortIndex])
	const onFind = () => {
		setIsReady(false)
		let currentPage = 1
		if(page != 0) currentPage = page
		searchAPI.search(currentPage, filter, sortIndex, sortDirection).then(res => {
			setTotalPages(res.pagination.last_visible_page)
			setData(res.data)
			setIsReady(true)
		})
	}
	const changePage = (currentPage: number) => {
		setPage(currentPage)
	}
	const changeSortIndex = (index: orderType) => {
		if(index === sortIndex) {
			if(sortDirection === 'asc') changeSortDirection('desc')
			else changeSortDirection('asc')
		}
		else setSortIndex(index)
	}
	const changeSortDirection = (direction: sortDirectionType) => {
		setSortDirection(direction)
	}
	return (
		<View className='relative h-full'>
			{!isReady && <Preloader/>}
			<div className={isReady ? '' : 'blur-2xl'}>
				<SearchPanel setFilter={setFilter} />
				<TitlesTable tableBody={data} changeSortIndex={changeSortIndex}/>
				<Paginator totalPages={totalPages} changePage={changePage} currentPage={page}/>
			</div>
		</View>
	)
}
