import {Text,View, TouchableOpacity, Image} from 'react-native'
import {useGetImageByNameQuery} from '../../store/static/static.api'
const CategoryCard = ({image_name, title}) =>{
	const {isError, isLoading, data} = useGetImageByNameQuery(image_name)
	const base64Image = data?.base64
	return (
		<TouchableOpacity className="mr-2 relative">
			<Image source={{
				uri: `data:image/png;base64,${base64Image}`
			}}
			className="h-20 w-20 rounded"
			/>
			<Text className="absolute bottom-1 left-1 text-white drop-shadow-xl shadow-black font-bold">{title}</Text>
		</TouchableOpacity>
	)
}
export default CategoryCard