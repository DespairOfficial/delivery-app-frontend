import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useGetImageByNameQuery } from '../../store/static/static.api';
import Currency from 'react-currency-formatter';
const DishRow = ({ id, name, description, image_name, price }) => {
	const { isLoading, isError, data } = useGetImageByNameQuery(image_name);
	const base64Image = data?.base64;
	return (
		<TouchableOpacity className="bg-white border-gray-300 border-t p-4">
			<View className=" flex flex-row">
				<View className="flex-1 pr-2">
					<Text className="text-lg mb-1">{name}</Text>
					<Text className="text-xs text-gray-400">{description}</Text>
					<Text className="text-gray-400 mt-2">
						<Currency quantity={price} currency="GBP" />
					</Text>
				</View>
				<View>
					<Image
						resizeMode="cover"
						source={{
							uri: `data:image/png;base64,${base64Image}`,
						}}
						className="h-20 w-20 bg-gray-300 "
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default DishRow;
