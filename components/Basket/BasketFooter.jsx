import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks/redux';
import { DELIVERY_COLOR, SELECTED_CURRENCY } from '../../constants';
import Currency from 'react-currency-formatter';
import { selectBasketTotal } from '../../store/basket/basketSlice';
const BasketFooter = () => {
	const basketTotal = useAppSelector(selectBasketTotal);
	const navigation = useNavigation();
	return (
		<View className="px-5 py-3 bg-white mt-3 space-y-4">
			<View className="flex-row justify-between">
				<Text className="text-sm">Subtotal</Text>
				<Text className="text-sm">
					<Currency
						quantity={basketTotal}
						currency={SELECTED_CURRENCY}
					/>
				</Text>
			</View>
			<View className="flex-row justify-between">
				<Text className="text-gray-500 text-xs">Delivery fee</Text>
				<Text className="text-gray-500 text-xs">
					<Currency
						quantity={basketTotal * 0.05}
						currency={SELECTED_CURRENCY}
					/>
				</Text>
			</View>
			<View className="flex-row justify-between">
				<Text className="font-extrabold">Order Total</Text>
				<Text className="font-extrabold">
					<Currency
						quantity={basketTotal * 1.05}
						currency={SELECTED_CURRENCY}
					/>
				</Text>
			</View>
			<TouchableOpacity onPress={()=>navigation.navigate('PreparingOrder')} className="rounded-lg p-3" style={{backgroundColor: DELIVERY_COLOR}}>
				<Text className="text-center text-white text-lg font-bold">Place Order</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketFooter;
