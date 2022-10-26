import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
	ArrowLeftIcon,
	ChevronRightIcon,
	MapPinIcon,
	QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import { useGetRestaurantDishesByIdQuery } from '../store/restaurant/restaurant.api';
import { DELIVERY_COLOR } from '../constants';
import DishRow from '../components/Dish/DishRow';
import BasketIcon from '../components/Basket/BasketIcon';
import { useAppDispatch } from '../hooks/redux';
import { restaurantActions } from '../store/restaurant/restaurant.slice';
const RestaurantScreen = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();
	const {
		params: {
			id,
			base64Image,
			title,
			rating,
			genre,
			address,
			short_description,
			long,
			lat,
		},
	} = useRoute();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	useEffect(() => {
		dispatch(
			restaurantActions.setRestaurant({
				id,
				base64Image,
				title,
				rating,
				genre,
				address,
				short_description,
				long,
				lat,
			})
		);
	}, []);
	const { isError, isLoading, data, error } =
		useGetRestaurantDishesByIdQuery(id);
	return (
		<>
			<BasketIcon />
			<ScrollView className=" bg-gray-100">
				<View className="relative">
					<Image
						resizeMode="cover"
						source={{
							uri: `data:image/png;base64,${base64Image}`,
						}}
						className="h-56 w-full bg-gray-300 p-4"
					/>
					<TouchableOpacity
						onPress={navigation.goBack}
						className="absolute top-14 left-5 bg-gray-300 rounded-full p-2"
					>
						<ArrowLeftIcon
							height={20}
							width={20}
							color={DELIVERY_COLOR}
						></ArrowLeftIcon>
					</TouchableOpacity>
				</View>
				<View className="bg-white">
					<View className="px-4 pt-4">
						<Text className="font-bold text-3xl">{title}</Text>
						<View className="flex-row space-x-2 my-1">
							<View className="flex-row items-center space-x-1">
								<StarIcon
									size={24}
									color="green"
									opacity={0.5}
								></StarIcon>
								<Text className="text-xs text-gray-500">
									<Text className="text-green-500">
										{rating}
									</Text>
									{' · '}
									{genre}
								</Text>
							</View>

							<View className="flex-row items-center space-x-1">
								<MapPinIcon
									size={24}
									color="gray"
									opacity={0.5}
								></MapPinIcon>
								<Text className="text-xs text-gray-500">
									<Text className="text-green-500">
										{address}
									</Text>
									{' · '}
									{genre}
								</Text>
							</View>
						</View>
						<Text className="text-gray-500 mt-2 pb-4">
							{short_description}
						</Text>
					</View>
					<TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
						<QuestionMarkCircleIcon
							color="gray"
							size={20}
							opacity={0.5}
						></QuestionMarkCircleIcon>
						<Text className="pl-2 flex-1 text-md font-bold">
							Have a food allergy?
						</Text>
						<ChevronRightIcon
							color={DELIVERY_COLOR}
						></ChevronRightIcon>
					</TouchableOpacity>
				</View>
				<View>
					<Text className="px-4 py-3 font-bold text-xl">Menu</Text>
				</View>
				<View className="pb-32">
					{data?.map((dish) => {
						return (
							<DishRow
								key={dish.id}
								id={dish.id}
								description={dish.description}
								image_name={dish.image_name}
								name={dish.name}
								price={dish.price}
							/>
						);
					})}
				</View>
			</ScrollView>
		</>
	);
};
export default RestaurantScreen;
