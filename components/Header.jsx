import {View, Image, Text} from 'react-native'
import {
	UserIcon,
	ChevronDownIcon,
} from 'react-native-heroicons/outline';
const Header = () => {
	return (
		<View className="flex-row pb-3 items-center space-x-2 mx-4">
			<Image
				source={{
					uri: 'https://wallpaperaccess.com/full/24528.png',
				}}
				className="h-10 w-10 bg-gray-400 rounded-full "
			/>
			<View className="flex-1">
				<Text className="font-bold text-gray-400 text-xs">
					Deliver now!
				</Text>
				<Text className="font-bold text-xl">
					Current location
					<ChevronDownIcon size={20} color="#00CCBB" />
				</Text>
			</View>
			<UserIcon size={35} color="#00CCBB" />
		</View>
	);
};
export default Header;
