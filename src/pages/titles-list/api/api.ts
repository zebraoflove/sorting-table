import { instance } from '../../../shared/api'
import { filterType, orderType, sortDirectionType } from '../../../shared/config'

export type TitlesResponseType = [
	{
		aired: {
			from: number
		}
		title: string
		score: number
		synopsis: string
	}
]
type DataResponseType = {
	data: TitlesResponseType
	pagination: {
		last_visible_page: number
	}
}
export const searchAPI = {
	async search(
		page = 1,
		filter: filterType = {
			titleName: '',
			dateFrom: '',
			dateTo: '',
			score: '1',
		}, order: orderType = '', direction: sortDirectionType = 'asc'
	) {
		const portion = 25
		const score: number = +filter.score
		const titleLetter = filter.titleName.substring(0, 1)
		const res = await instance.get<DataResponseType>(
			`/anime?page=${page}&letter=${titleLetter}&start_date=${filter.dateFrom}&end_date=${filter.dateTo}
			&min_score=${score}&order_by=${order}&sort=${direction}`
		)
		return res.data
	}
}
