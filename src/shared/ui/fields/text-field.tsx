import { ChangeEvent, FC } from 'react'

type PropsType = {
	placeholder: string
	value: string
	isWrong: boolean
	setField: (field: string) => void
}
export const TextField: FC<PropsType> = ({ placeholder, setField, value, isWrong }) => {
	const handleField = (e: ChangeEvent<HTMLInputElement>) => {
		setField(e.currentTarget.value)
	}
	return (
		<input
			className={isWrong ? 'w-1/4 h-8 opacity-80 text-center text-xs sm:text-lg border-2 border-red-600 placeholder-red-600'
				: 'w-1/4 h-8 opacity-80 text-center text-xs sm:text-lg'}
			placeholder={placeholder}
			onChange={handleField}
			value={value}
		></input>
	)
}
