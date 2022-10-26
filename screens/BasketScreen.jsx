import { View,  ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { selectBasketItems } from '../store/basket/basketSlice';
import { useState, useEffect } from 'react';
import BasketItem from '../components/Basket/BasketItem';
import BasketHeader from '../components/Basket/BasketHeader';
import BasketFooter from '../components/Basket/BasketFooter'
const BasketScreen = () => {
	const items = useAppSelector(selectBasketItems);
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
	useEffect(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});
		setGroupedItemsInBasket(groupedItems);
	}, [items]);

	return (
		<View className="mt-6 flex-1 bg-white">
			<View className="flex-1 bg-gray-100">
				<BasketHeader />
				<ScrollView className="divide-y divide-gray-200">
					{Object.entries(groupedItemsInBasket).map(
						([key, items]) => {
							return (
								<BasketItem
									key={key}
									id={key}
									items={items}
								></BasketItem>
							);
						}
					)}
				</ScrollView>
				<BasketFooter/>
			</View>
		</View>
	);
};
export default BasketScreen;
