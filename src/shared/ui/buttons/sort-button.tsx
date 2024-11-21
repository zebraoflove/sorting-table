import { FC } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

type PropsType = {
	isDisable: boolean
	onSort: () => void
}
export const SortButton: FC<PropsType> = ({ isDisable, onSort }) => {
	return (
		<button className='w-4' title='Sort' disabled={isDisable} onClick={onSort}>
			<FontAwesome name='sort' size={14} color='black' />
		</button>
	)
}
