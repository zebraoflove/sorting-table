import { Paginator, SearchPanel, TitlesTable } from '../../../modules'
import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { searchAPI } from '../api/api'
import { filterType, orderType, sortDirectionType } from '../../../shared/config'

export const TitlesList = () => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState(null as null | any)
	const [totalPages, setTotalPages] = useState(0)
	const [filter, setFilter] = useState({
		titleName: '',
		dateFrom: '',
		dateTo: '',
		score: '1'
	} as filterType)
	const [sortIndex, setSortIndex] = useState('' as orderType)
	const [sortDirection, setSortDirection] = useState('asc' as sortDirectionType)
	// useEffect(() => {
	// 	onFind()
	// 	console.log('start')
	// }, [])
	useEffect(() => {
		onFind()
		console.log('page')
	}, [page])
	useEffect(() => {
		if (page === 1) onFind()
		else setPage(1)
		console.log('filter/sort direction')
	}, [filter, sortDirection])
	useEffect(() => {
		if (sortDirection === 'desc') setSortDirection('asc')
		else {
			if (page === 1) onFind()
			else setPage(1)
		}
		console.log('sortIndex')
	}, [sortIndex])
	const onFind = () => {
		searchAPI.search(page, filter, sortIndex, sortDirection).then(res => {
			setTotalPages(res.pagination.last_visible_page)
			setData(res.data)
			console.log(page)
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
			<SearchPanel setFilter={setFilter} />
			<TitlesTable tableBody={data} changeSortIndex={changeSortIndex}/>
			<Paginator totalPages={totalPages} changePage={changePage} currentPage={page}/>
		</View>
	)
}
