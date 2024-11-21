import { FC } from 'react'

type PropsType = {
	placeholder: string
	onChange: () => void
}
export const TextField: FC<PropsType> = ({ placeholder, onChange }) => {
	return (
		<input
			className='w-1/4 h-8 opacity-80 text-center text-xs sm:text-lg '
			placeholder={placeholder}
			onChange={onChange}
		></input>
	)
}
