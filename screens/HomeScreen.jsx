import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { View,  TextInput, ScrollView } from 'react-native';

import Categories from '../components/Categories/Categories';
import FeaturedRow from '../components/Featured/FeaturedRow';
import Header from '../components/Header';
import SearchRow from '../components/SearchRow';
import { useGetFeaturedQuery } from '../store/featured/featured.api';
const HomeScreen = () => {
	const navigation = useNavigation();
	const { isLoading, isError, data } = useGetFeaturedQuery();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	useEffect(() => {}, []);
	return (
		<View className="mt-5 bg-white pt-3 pb-28">
			{/*Header */}	
			<Header/>

			{/*Search */}
			<SearchRow/>

			{/*Body*/}
			<ScrollView className="bg-gray-100">
				{/* Categories */}
				<Categories />
				{data?.map((item) => {
					return (
						<FeaturedRow
							key={item.id}
							id={item.id}
							title={item.name}
							description={item.description}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};
export default HomeScreen;
