import {Text,View, TouchableOpacity, Image} from 'react-native'

const CategoryCard = ({img, title}) =>{
	return (
		<TouchableOpacity className="mr-2 relative">
			<Image source={{
				uri: `data:image/png;base64,${img}`
			}}
			className="h-20 w-20 rounded"
			/>
			<Text className="absolute bottom-1 left-1 text-white drop-shadow-xl shadow-black font-bold">{title}</Text>
		</TouchableOpacity>
	)
}
export default CategoryCard