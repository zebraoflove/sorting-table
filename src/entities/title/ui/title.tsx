import { FC } from 'react'

type PropsType = {
	name: string
	description: string
	releaseDate: number
	score: number
}
export const Title: FC<PropsType> = ({
	name,
	description,
	releaseDate,
	score
}) => {
	let date = releaseDate.toString().substring(0, 10)
	return (
		<tr className='border-4 border-amber-700'>
			<td className='border-2 border-amber-700'>{name}</td>
			<td className='border-2 border-amber-700'>{description}</td>
			<td className='border-2 border-amber-700 text-center'>{date}</td>
			<td className='border-2 border-amber-700 text-center'>{score}</td>
		</tr>
	)
}
