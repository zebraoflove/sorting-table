import { FC } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type PropsType = {
	isDisable: boolean
	handleSort: () => void
}
export const SortButton: FC<PropsType> = ({ isDisable, handleSort }) => {
	return (
		<button className='w-4' title='Sort' disabled={isDisable} onClick={handleSort}>
			<FontAwesome name='sort' size={14} color='black' />
		</button>
	)
}