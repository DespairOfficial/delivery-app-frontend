import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../../interfaces/Restaurant.interface';

export const restaurantApi = createApi({
	reducerPath: 'restaurant/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.0.108:5001/api/restaurant/',
	}),
	endpoints: (build) => ({
		getRestaurants: build.query<Restaurant[], any>({
			query: () => ({
				url: '',
			}),
		}),
		getRestaurantsByFeaturedId: build.query<Restaurant[], any>({
			query: (id)=>({
				url: `/featured/${id}`
			})
		})
	}),
});
export const {useGetRestaurantsByFeaturedIdQuery} = restaurantApi