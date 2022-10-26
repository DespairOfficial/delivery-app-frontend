import { restaurantSlice } from './restaurant/restaurant.slice';
import { staticApi } from './static/static.api';
import { categoryApi } from './category/category.api';
import { restaurantApi } from './restaurant/restaurant.api';
import { featuredApi } from './featured/featured.api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { basketSlice } from './basket/basketSlice';

export const store = configureStore({
	reducer: {
		[featuredApi.reducerPath]: featuredApi.reducer,
		[restaurantApi.reducerPath]: restaurantApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		[staticApi.reducerPath]: staticApi.reducer,
		basket: basketSlice.reducer,
		restaurant: restaurantSlice.reducer
		
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			featuredApi.middleware,
			restaurantApi.middleware,
			categoryApi.middleware,
			staticApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
