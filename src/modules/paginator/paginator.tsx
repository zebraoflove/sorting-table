import { View } from 'react-native'
import { FC, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
type PropsType = {
	totalPages: number
	currentPage: number
	portionSize?: number
	changePage: (currentPage: number) => void
}
export const Paginator: FC<PropsType> = ({
	totalPages,
	currentPage,
	changePage,
	portionSize = 10
}) => {
	let pages: Array<number> = []
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i)
	}
	let portionCount: number = Math.ceil(totalPages / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize
	const onPrevPortion = () => {
		let currentPage = leftPortionPageNumber - portionSize
		changePage(currentPage)
		setPortionNumber(portionNumber - 1)
	}
	const onNextPortion = () => {
		let currentPage = rightPortionPageNumber + 1
		changePage(currentPage)
		setPortionNumber(portionNumber + 1)
	}
	return (
		<View className='flex-1 flex-row justify-center gap-1 text-sm sm:text-xl sm:gap-2'>
			{portionNumber > 1 && (
				<button onClick={onPrevPortion}>
					<AntDesign name='caretleft' size={18} color='black' />
				</button>
			)}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return (
						<span
							className={p===currentPage ? "cursor-pointer font-bold" : "cursor-pointer"}
							key={p}
							onClick={() => {
								changePage(p)
							}}
						>
							{p}
						</span>
					)
				})}
			{portionNumber < portionCount && (
				<button onClick={onNextPortion}>
					<AntDesign name='caretright' size={18} color='black' />
				</button>
			)}
		</View>
	)
}
