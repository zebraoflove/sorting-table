import { instance } from '../../../shared/api'

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
	async search(page = 1, name = '', dateFrom = '', dateTo = '', minScore = 0) {
		const portion = 25
		const res = await instance.get<DataResponseType>(
			`/anime?portion=${portion}&page=${page}`
		)
		return res.data
	}
}
