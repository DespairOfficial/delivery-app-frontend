import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import {useGetImageByNameQuery} from '../../store/static/static.api'
import { useNavigation } from '@react-navigation/native';
const RestaurantCard = ({
	id,
	image_name,
	title,
	rating,
	genre,
	address,
	short_description,
	long,
	lat,
}) => {
	const {isLoading, isError, data, error} = useGetImageByNameQuery(image_name)
	const base64Image = data?.base64
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			className="bg-white mr-3 shadow"
			onPress={() => {
				navigation.navigate('Restaurant', {
					id,
					base64Image,
					title,
					rating,
					genre,
					address,
					short_description,
					long,
					lat,
				});
			}}
		>
			<Image
				resizeMode="cover"
				source={{
					uri: `data:image/png;base64,${base64Image}`,
				}}
				className="h-36 w-72 rounded-sm"
			/>
			<View className="px-3 pb-4">
				<Text className="font-bold text-lg pt-2">{title}</Text>
				<View className="flex-row items-center space-x-1">
					<StarIcon color={'green'} opacity={0.5} size={22} />
					<Text className="text-xs text-gray-500">
						<Text className="text-green-500">{rating}</Text>
						{' · '}
						{genre}
					</Text>
				</View>
				<View className="flex-row items-center space-x-1 ">
					<MapPinIcon color={'gray'} />
					<Text className="text-xs text-gray-500">
						Nearby · {address}{' '}
						
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default RestaurantCard;
