import { Featured } from './../../interfaces/Featured.interface';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const featuredApi = createApi({
	reducerPath: 'featured/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.0.108:5001/api/featured/'
	}),
	endpoints: build =>({
		getFeatured: build.query<Featured, any>({
			query: ()=>({
				url: '',
			}),
		})
	})
})
export const {useGetFeaturedQuery} = featuredApi