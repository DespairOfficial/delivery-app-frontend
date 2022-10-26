import { View, Text } from 'react-native';
import {useEffect} from 'react'
import { DELIVERY_COLOR } from '../constants';
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
	const navigation = useNavigation()
	useEffect(()=>{
		setTimeout(()=>{
			navigation.navigate("Delivery")
		},4000)
	},[])
	return (
		<View className="mt-6 flex-1 justify-center items-center" style={{backgroundColor: "#79bce9"}}>
			<Animatable.Image
				source={require("../assets/delivery.gif")}
				className="h-96 w-96"
				resizeMode="contain"
			/>
			<Animatable.Text
				animation="slideInUp"
				className="text-lg text-white font-bold text-center"
			> Waiting for restaurant to accept your order! </Animatable.Text>
			<Progress.Bar size={60} indeterminate={true} color="white" fill="white" borderWidth={2} className="mt-5"/>
		</View>
	);
};
export default PreparingOrderScreen;
