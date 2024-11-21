import { FC } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

type PropsType = {
	isDisable: boolean
	onFind: () => void
}
export const SearchButton: FC<PropsType> = ({ isDisable, onFind }) => {
	return (
		<button title='Search' disabled={isDisable} onClick={onFind}>
			<AntDesign name='search1' size={18} color='blue' />
		</button>
	)
}
