import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useGetImageByNameQuery } from '../../store/static/static.api';
import Currency from 'react-currency-formatter';
import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { DELIVERY_COLOR, SELECTED_CURRENCY } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	basketActions,
	selectBasketItemsWithId
} from '../../store/basket/basketSlice';
const DishRow = ({ id, name, description, image_name, price }) => {
	const { isLoading, isError, data } = useGetImageByNameQuery(image_name);
	const base64Image = data?.base64;
	const [isPressed, setIsPressed] = useState(false);
	const items = useAppSelector((state)=>selectBasketItemsWithId(state, id));
	const dispatch = useAppDispatch()
	const addItemToBasket = () => {
		dispatch(
			basketActions.addToBasket({
				id,
				name,
				description,
				image_name,
				price,
			})
		);
	};
	const removeItemFromBasket = () =>{
		dispatch(
			basketActions.removeFromBasket({
				id,
				name,
				description,
				image_name,
				price,
			})
		)
	}
	return (
		<>
			<TouchableOpacity
				onPress={() => {
					setIsPressed(!isPressed);
				}}
				className="bg-white border-gray-300 border-t p-4"
			>
				<View className=" flex flex-row">
					<View className="flex-1 pr-2">
						<Text className="text-lg mb-1">{name}</Text>
						<Text className="text-xs text-gray-400">
							{description}
						</Text>
						<Text className="text-gray-400 mt-2">
							<Currency quantity={price} currency={SELECTED_CURRENCY} />
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
			{isPressed && (
				<View className="bg-white px-4">
					<View className="flex-row items-center space-x-3 pb-3">
						<TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
							<MinusCircleIcon size={30} color={items.length > 0 ? DELIVERY_COLOR : 'gray'} />
						</TouchableOpacity>
						<Text>{items?.length}</Text>
						<TouchableOpacity onPress={addItemToBasket}>
							<PlusCircleIcon
								size={30}
								color={DELIVERY_COLOR}
							></PlusCircleIcon>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
};
export default DishRow;
