import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { DELIVERY_COLOR } from '../constants';
import { useAppSelector } from '../hooks/redux';
import { selectRestaurant } from '../store/restaurant/restaurant.slice';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
const DeliveryScreen = () => {
	const navigation = useNavigation();
	const restaurant = useAppSelector(selectRestaurant);
	return (
		<View className="flex-1" style={{ backgroundColor: DELIVERY_COLOR }}>
			<View className="mt-5 z-50">
				<View className="flex-row justify-between items-center p-5">
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Home');
						}}
					>
						<XMarkIcon color="white" size={30} />
					</TouchableOpacity>
					<Text className="font-light text-white text-lg">
						Order Help
					</Text>
				</View>
				<View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-lg text-gray-400">
								Estimated Arrival
							</Text>
							<Text className="text-4xl font-bold">
								45-50 Minutes
							</Text>
						</View>
						<Image
							source={{
								uri: '../assets/adaptive-icon.png',
							}}
							className="h-20 w-20"
						/>
					</View>
					<Progress.Bar
						color={DELIVERY_COLOR}
						indeterminate={true}
						size={30}
					/>
					<Text className="mt-3 text-gray-500">
						You order in {restaurant.title} is being prepared
					</Text>
				</View>
			</View>
			<MapView
				initialRegion={{
					latitude: restaurant.lat,
					longitude: restaurant.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				mapType="mutedStandard"
				className="flex-1 -mt-10 z-0"
			>
				<Marker
					coordinate={{
						latitude: restaurant.lat,
						longitude: restaurant.long,
					}}
					title={restaurant.title}
					description={restaurant.short_description}
					identifier="origin"
					pinColor={DELIVERY_COLOR}
				/>
			</MapView>
			<View className="bg-white flex-row items-center space-x-5 h-20">
				<Image
					source={{
						uri: '../assets/driver.jpg',
					}}
					className="h-12 w-12 rounded-full p-4 ml-5"
				/>
				<View className="flex-1">
					<Text className="text-lg">Tony Parker</Text>
					<Text className="text-lg text-gray-400">Your Deliver</Text>
				</View>
				<TouchableOpacity>
					<Text
						className="text-lg mr-5 font-bold"
						style={{ color: DELIVERY_COLOR }}
					>
						Call
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default DeliveryScreen;
