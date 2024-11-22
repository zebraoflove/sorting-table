import { ChangeEvent, FC } from 'react'

type PropsType = {
	placeholder: string
	value: string
	setField: (field: string) => void
}
export const TextField: FC<PropsType> = ({ placeholder, setField, value }) => {
	const handleField = (e: ChangeEvent<HTMLInputElement>) => {
		setField(e.currentTarget.value)
	}
	return (
		<input
			className='w-1/4 h-8 opacity-80 text-center text-xs sm:text-lg '
			placeholder={placeholder}
			onChange={handleField}
			value={value}
		></input>
	)
}
