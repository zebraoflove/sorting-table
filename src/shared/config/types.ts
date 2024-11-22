export type filterType = {
	titleName: string
	dateFrom: string
	dateTo: string
	score: string
}
export type orderType = 'title'| 'start_date' | 'score' |''
export type sortDirectionType = 'asc' | 'desc'