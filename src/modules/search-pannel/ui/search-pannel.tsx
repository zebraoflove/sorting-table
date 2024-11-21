import { View } from 'react-native'
import { SearchButton } from '../../../shared/ui/buttons'
import { TextField } from '../../../shared/ui/fields'
import { FC, useState } from 'react'

type PropsType = {
	onFind: () => void
}
export const SearchPannel: FC<PropsType> = ({ onFind }) => {
	const [titleName, setTitleName] = useState('')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [score, setScore] = useState('')
	const handleTitleName = () => {}
	return (
		<View className='flex-row'>
			<TextField placeholder='Title name' onChange={handleTitleName} />
			<TextField placeholder='Release date(fr.)' onChange={handleTitleName} />
			<TextField placeholder='Release date(to)' onChange={handleTitleName} />
			<TextField placeholder='Score' onChange={handleTitleName} />
			<SearchButton isDisable={false} onFind={onFind} />
		</View>
	)
}
