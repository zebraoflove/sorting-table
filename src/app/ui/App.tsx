import './../../global.css'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { TitlesList } from '../../pages/titles-list'
import { useState } from 'react'

export default function App() {
	return (
		<View className='flex-1 bg-amber-100 justify-center align-middle overflow-auto'>
			<TitlesList/>
			<StatusBar style='auto' />
		</View>
	)
}
