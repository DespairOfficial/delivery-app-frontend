import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useGetRestaurantsByFeaturedIdQuery } from '../../store/restaurant/restaurant.api';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from '../Restaurant/RestaurantCard';
import {DELIVERY_COLOR} from '../../constants'
const FeaturedRow = ({ id, title, description }) => {
	const { isError, isFetching, data } =
		useGetRestaurantsByFeaturedIdQuery(id);
	return (
		<View key={id}>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color={DELIVERY_COLOR} />
			</View>
			<Text className="text-xs text-gray-500 px-4 ">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{/*Restaurant cards*/}
				{data?.map((restaurant) => {
					return (
						<RestaurantCard
							key={restaurant.id}
							id={restaurant.id}
							image_name={restaurant.image_name}
							title={restaurant.name}
							rating={restaurant.rating}
							genre={restaurant.category_name}
							address={restaurant.address}
							short_description={restaurant.description}
							long={restaurant.long}
							lat={restaurant.lat}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};
export default FeaturedRow;
