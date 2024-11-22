import { View } from 'react-native'
import { SearchButton } from '../../../shared/ui/buttons'
import { TextField } from '../../../shared/ui/fields'
import { FC, useState } from 'react'
import { filterType } from '../../../shared/config'

type PropsType = {
	setFilter: (filter: filterType) => void
}
export const SearchPanel: FC<PropsType> = ({ setFilter }) => {
	const [titleName, setTitleName] = useState('')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [score, setScore] = useState('')
	const handleTitleName = (field: string) => {
		setTitleName(field)
	}
	const handleDateFrom = (field: string) => {
		setDateFrom(field)
	}
	const handleDateTo = (field: string) => {
		setDateTo(field)
	}
	const handleScore = (field: string) => {
		setScore(field)
	}
	const handleSearch = () => {
		setFilter({
			titleName: titleName,
			dateFrom: dateFrom,
			dateTo: dateTo,
			score: score
		})
	}
	return (
		<View className='flex-row'>
			<TextField
				placeholder='First letter of title name'
				setField={handleTitleName}
				value={titleName}
			/>
			<TextField
				placeholder='Release date(fr.)'
				setField={handleDateFrom}
				value={dateFrom}
			/>
			<TextField
				placeholder='Release date(to)'
				setField={handleDateTo}
				value={dateTo}
			/>
			<TextField placeholder='Score' setField={handleScore} value={score} />
			<SearchButton isDisable={false} onFind={handleSearch} />
		</View>
	)
}
