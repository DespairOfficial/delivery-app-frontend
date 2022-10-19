import { View, TextInput } from 'react-native';
import {
	AdjustmentsHorizontalIcon,
	MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
const SearchRow = () => {
	return (
		<View className="flex-row items-center space-x-2 pb-2 mx-4">
			<View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 ">
				<MagnifyingGlassIcon color="gray" />
				<TextInput
					placeholder="Restaurants and cuisines"
					keyboardType="default"
				></TextInput>
			</View>
			<AdjustmentsHorizontalIcon color="#00CCBB" />
		</View>
	);
};
export default SearchRow;
