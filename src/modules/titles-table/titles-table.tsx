import { SortButton } from '../../shared/ui/buttons/sort-button'
import { FC } from 'react'
import { Title } from '../../entities/title'
import { TitlesResponseType } from '../../pages/titles-list/api/api'
import { orderType } from '../../shared/config'

type PropsType = {
	tableBody: TitlesResponseType
	changeSortIndex: (index: orderType) => void
}
export const TitlesTable: FC<PropsType> = ({ tableBody, changeSortIndex }) => {
	const onSortByTitle = () => {
		changeSortIndex('title')
	}
	const onSortByDate = () => {
		changeSortIndex('start_date')
	}
	const onSortByScore = () => {
		changeSortIndex('score')
	}
	return (
		<table>
			<thead>
				<tr>
					<th className='text-center'>
						<text>Title</text>
						<SortButton isDisable={false} handleSort={onSortByTitle}></SortButton>
					</th>
					<th className='text-center'>
						<text>Description</text>
					</th>
					<th className='text-center w-1/12'>
						<text>Release date</text>
						<SortButton isDisable={false} handleSort={onSortByDate}></SortButton>
					</th>
					<th className='text-center w-1/12'>
						<text>Score</text>
						<SortButton isDisable={false} handleSort={onSortByScore}></SortButton>
					</th>
				</tr>
			</thead>
			<tbody>
				{tableBody
					? tableBody.map(row => (
							<Title
								name={row.title}
								description={row.synopsis}
								releaseDate={row.aired.from ? row.aired.from : 0}
								score={row.score ? row.score : 0}
							/>
						))
					: null}
			</tbody>
		</table>
	)
}
