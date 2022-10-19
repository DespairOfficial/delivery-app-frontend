import { Category } from './../../interfaces/Category.interface';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const categoryApi = createApi({
	reducerPath: 'category/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.0.108:5001/api/category/'
	}),
	endpoints: build =>({
		getCategoryById: build.query<Category, any>({
			query: (id)=>({
				url: 'id',
			}),
		}),
		getCategories: build.query<Category[], any>({
			query: ()=>({
				url: ''
			})
		})
	})
})
export const {useGetCategoryByIdQuery, useGetCategoriesQuery} = categoryApi