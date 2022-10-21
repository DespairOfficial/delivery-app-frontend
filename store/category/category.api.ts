import { Category } from './../../interfaces/Category.interface';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {SERVER_IP} from '../../constants'
interface ImageResponse{
	base64: string
}
export const categoryApi = createApi({
	reducerPath: 'category/api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_IP
	}),
	endpoints: build =>({
		getCategoryById: build.query<Category, any>({
			query: (id)=>({
				url: '/category/id',
			}),
		}),
		getCategories: build.query<Category[], any>({
			query: ()=>({
				url: '/category'
			})
		}),
		// getCategoryImage: build.query<ImageResponse, any>({
		// 	query: (fileName)=>({
		// 		url: '/static/'+fileName
		// 	})
		// })
	})
})
export const {useGetCategoryByIdQuery, useGetCategoriesQuery} = categoryApi