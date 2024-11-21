import { SearchPannel, TitlesTable } from '../../../modules'
import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { searchAPI } from '../api/api'

export const TitlesList = () => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState(null as null | any)
	const [totalPages, setTotalPages] = useState(0)
	useEffect(() => {
		onFind()
	}, [])
	const onFind = () => {
		searchAPI.search().then(res => {
			setTotalPages(res.pagination.last_visible_page)
			setData(res.data)
			console.log(res.pagination.last_visible_page)
			console.log(res.data[0].aired.from)
		})
	}
	return (
		<View className='relative h-full'>
			<SearchPannel onFind={onFind} />
			<TitlesTable tableBody={data} />
		</View>
	)
}
