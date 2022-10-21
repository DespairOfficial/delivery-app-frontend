import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_IP } from '../../constants';

interface ImageResponse{
	base64: string
}

export const staticApi = createApi({
	reducerPath: 'static/api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_IP,
	}),
	endpoints: (build) => ({
		getImageByName: build.query<ImageResponse, any>({
			query: (fileName) => ({
				url: `/static/${fileName}`,
			}),
		}),
	}),
});
export const {
	useGetImageByNameQuery
} = staticApi;
