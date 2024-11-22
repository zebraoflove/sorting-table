import { SortButton } from '../../shared/ui/buttons/sort-button'
import { FC } from 'react'
import { Title } from '../../entities/title'
import { TitlesResponseType } from '../../pages/titles-list/api/api'

type PropsType = {
	tableBody: TitlesResponseType
}
export const TitlesTable: FC<PropsType> = ({ tableBody }) => {
	const onSort = () => {
		console.log('sort')
	}
	return (
		<table>
			<thead>
				<tr>
					<th className='text-center'>
						<text>Title</text>
						<SortButton isDisable={false} onSort={onSort}></SortButton>
					</th>
					<th className='text-center'>
						<text>Description</text>
					</th>
					<th className='text-center w-1/12'>
						<text>Release date</text>
						<SortButton isDisable={false} onSort={onSort}></SortButton>
					</th>
					<th className='text-center w-1/12'>
						<text>Score</text>
						<SortButton isDisable={false} onSort={onSort}></SortButton>
					</th>
				</tr>
			</thead>
			<tbody>
				{tableBody
					? tableBody.map(row => (
							<Title
								name={row.title}
								description={row.synopsis}
								releaseDate={row.aired.from}
								score={row.score}
							/>
						))
					: null}
			</tbody>
		</table>
	)
}
