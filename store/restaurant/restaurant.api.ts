import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../../interfaces/Restaurant.interface';
import { SERVER_IP } from '../../constants';
import { Dish } from '../../interfaces/Dish.interface';
interface ImageResponse{
	base64: string
}

export const restaurantApi = createApi({
	reducerPath: 'restaurant/api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_IP,
	}),
	endpoints: (build) => ({
		getRestaurants: build.query<Restaurant[], any>({
			query: () => ({
				url: '/restaurant/',
			}),
		}),
		getRestaurantsByFeaturedId: build.query<Restaurant[], any>({
			query: (id) => ({
				url: `/restaurant/featured/${id}`,
			}),
		}),
		// getRestaurantImageByName: build.query<ImageResponse, any>({
		// 	query: (fileName) => ({
		// 		url: `/static/${fileName}`,
		// 	}),
		// }),
		getRestaurantDishesById: build.query<Dish[], any>({
			query: (id)=>({
				url: `/dish/restaurant/${id}`
			})
		})
	}),
});
export const {
	useGetRestaurantsByFeaturedIdQuery,
	
	useGetRestaurantDishesByIdQuery
} = restaurantApi;
