import preloader from './../../../assets/Preloader.gif'
import { Image } from "react-native";
export const Preloader = () => {
	return <div className="fixed w-16 left-1/2">
		<Image source={preloader}/>
	</div>
}