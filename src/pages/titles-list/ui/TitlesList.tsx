import { Paginator, SearchPanel, TitlesTable } from '../../../modules'
import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { searchAPI } from '../api/api'
import { filterType } from '../../../shared/config'

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
	useEffect(() => {
		onFind()
	}, [])
	useEffect(() => {
		onFind()
	}, [page])
	useEffect(() => {
		if (page === 1) onFind()
		else setPage(1)
	}, [filter])
	const onFind = () => {
		searchAPI.search(page, filter).then(res => {
			setTotalPages(res.pagination.last_visible_page)
			setData(res.data)
			console.log(page)
		})
	}
	const changePage = (currentPage: number) => {
		setPage(currentPage)
	}
	return (
		<View className='relative h-full'>
			<SearchPanel setFilter={setFilter} />
			<TitlesTable tableBody={data} />
			<Paginator totalPages={totalPages} changePage={changePage} />
		</View>
	)
}
