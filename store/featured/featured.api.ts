import { Featured } from './../../interfaces/Featured.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_IP } from '../../constants';

export const featuredApi = createApi({
	reducerPath: 'featured/api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_IP ,
	}),
	endpoints: (build) => ({
		getFeatured: build.query<Featured, any>({
			query: () => ({
				url: '/featured',
			}),
		}),
	}),
});
export const { useGetFeaturedQuery } = featuredApi;
