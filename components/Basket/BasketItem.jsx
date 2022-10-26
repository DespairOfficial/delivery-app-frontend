import { View, Text, Image, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { basketActions } from '../../store/basket/basketSlice';
import { useGetImageByNameQuery } from '../../store/static/static.api';
import { DELIVERY_COLOR, SELECTED_CURRENCY } from '../../constants';
import { useAppDispatch } from '../../hooks/redux';
const BasketItem = ({ id, items }) => {
	const dispatch = useAppDispatch();
	const { isLoading, isError, data } = useGetImageByNameQuery(
		items[0].image_name
	);
	const base64Image = data?.base64;
	return (
		<View className="flex-row items-center space-x-3 bg-white py-2 px-5">
			<Text>{items.length} x</Text>
			<Image
				source={{
					uri: `data:image/png;base64,${base64Image}`,
				}}
				className="w-14 h-14 rounded-full"
			/>
			<Text className="flex-1">{items[0]?.name}</Text>
			<Text className="flex-1">
				<Currency quantity={items[0]?.price} currency={SELECTED_CURRENCY} />
			</Text>
			<TouchableOpacity>
				<Text
					className="text-xs"
					style={{ color: DELIVERY_COLOR }}
					onPress={() => {
						dispatch(
							basketActions.removeFromBasket({ id: parseInt(id) })
						);
					}}
				>
					Remove
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketItem;
