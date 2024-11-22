import { View } from 'react-native'
import { SearchButton } from '../../../shared/ui/buttons'
import { TextField } from '../../../shared/ui/fields'
import { FC, useState } from 'react'
import { filterType, warningType } from '../../../shared/config'

type PropsType = {
	setFilter: (filter: filterType) => void
}
export const SearchPanel: FC<PropsType> = ({ setFilter }) => {
	const [titleName, setTitleName] = useState('')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [score, setScore] = useState('')
	const [warningsList, setWarningsList] = useState([] as warningType[])
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
	const checkSearch = () => {
		let currentWarningList = [] as warningType[]
		if (!/^([A-Z]+.*)?$/i.test(titleName)) currentWarningList.push('titleName')
		if (!/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9])?$/i.test(dateFrom)) currentWarningList.push('dateFrom')
		if (!/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9])?$/i.test(dateTo)) currentWarningList.push('dateTo')
		if (!/^([1-9](.[0-9])?)?$/i.test(score)) currentWarningList.push('score')
		setWarningsList(currentWarningList)
		if(currentWarningList.length === 0) handleSearch()
	}
	const isItemInArray = (item: warningType) => {
		return warningsList.indexOf(item) != -1
	}
	return (
		<View className='flex-row'>
			<TextField
				placeholder={isItemInArray('titleName') ? 'Print english letter' : 'First letter of title name'}
				setField={handleTitleName}
				value={titleName} isWrong={isItemInArray('titleName')}
			/>
			<TextField
				placeholder={isItemInArray('dateFrom') ? 'YYYY-MM-DD' : 'Release date(fr.)'}
				setField={handleDateFrom}
				value={dateFrom} isWrong={isItemInArray('dateFrom')}
			/>
			<TextField
				placeholder={isItemInArray('dateTo') ? 'YYYY-MM-DD' : 'Release date(to)'}
				setField={handleDateTo}
				value={dateTo} isWrong={isItemInArray('dateTo')}
			/>
			<TextField placeholder={isItemInArray('score') ? '1 to 9.9' : 'Score'}
								 setField={handleScore} value={score} isWrong={isItemInArray('score')}/>
			<SearchButton isDisable={false} onFind={checkSearch}/>
		</View>
	)
}
