import { instance } from '../../../shared/api'
import { filterType } from '../../../shared/config'

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
			score: '1'
		}
	) {
		const portion = 25
		const score: number = +filter.score
		const titleLetter = filter.titleName.substring(0, 1)
		const res = await instance.get<DataResponseType>(
			`/anime?page=${page}&letter=${titleLetter}&start_date=${filter.dateFrom}&end_date=${filter.dateTo}
			&min_score=${score}`
		)
		return res.data
	}
}
