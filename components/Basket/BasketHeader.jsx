import { View, Text, TouchableOpacity, Image } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { selectRestaurant } from '../../store/restaurant/restaurant.slice';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks/redux';
import { DELIVERY_COLOR } from '../../constants';
const BasketHeader = () => {
	const navigation = useNavigation();
	const restaurant = useAppSelector(selectRestaurant);
	return (
		<>
			<View className="p-5 border-b bg-white border-gray-300 shadow-xs">
				<View>
					<Text className="text-lg font-bold text-center">
						Basket
					</Text>
					<Text className="text-center text-gray-400">
						{restaurant.title}
					</Text>
				</View>
				<TouchableOpacity
					onPress={navigation.goBack}
					className="rounded-full absolute top-3 right-5"
				>
					<XCircleIcon size={50} color={DELIVERY_COLOR} />
				</TouchableOpacity>
			</View>
			
			<View className="flex-row space-x-4 px-4 py-3 bg-white my-3 items-center">
				<Image
					source={{
						uri: 'https://wallpaperaccess.com/full/24528.png',
					}}
					className="w-7 h-7  p-4 rounded-full"
				/>
				<Text className="flex-1">Deliver in 50 min</Text>
				<TouchableOpacity>
					<Text style={{ color: DELIVERY_COLOR }}>Change</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default BasketHeader;
