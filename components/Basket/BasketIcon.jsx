import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks/redux';
import {
	selectBasketItems,
	selectBasketTotal,
} from '../../store/basket/basketSlice';
import { View, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { DELIVERY_COLOR, SELECTED_CURRENCY } from '../../constants';

const BasketIcon = () => {
	const items = useAppSelector(selectBasketItems);
	const navigation = useNavigation();
	const basketTotal = useAppSelector(selectBasketTotal);
	if(!items.length){
		return null
	}
	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity
				onPress={() => navigation.navigate('Basket')}
				className="rounded-lg p-3 mx-4 flex-row items-center justify-between"
				style={{ backgroundColor: DELIVERY_COLOR }}
			>
				<Text className="px-2 py-1  font-extrabold bg-gray-400 text-white ">
					{items.length}
				</Text>
				<Text className="text-white font-extrabold text-lg">
					View basket
				</Text>
				<Text className="text-white text-lg font-extrabold">
					<Currency quantity={basketTotal} currency={SELECTED_CURRENCY} />
				</Text>
			</TouchableOpacity>
		</View>
	);
};
export default BasketIcon;
