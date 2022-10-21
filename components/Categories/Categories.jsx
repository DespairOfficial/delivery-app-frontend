import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { useGetCategoriesQuery } from '../../store/category/category.api';
const Categories = () => {
	const { isLoading, isError, data } = useGetCategoriesQuery();
	return (
		<ScrollView
		className="mx-1"
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
		>
			{data?.map((category) => {
				return (
					<CategoryCard
						key={category.id}
						image_name={category.image_name}
						title={category.name}
					/>
				);
			})}
		</ScrollView>
	);
};
export default Categories;
