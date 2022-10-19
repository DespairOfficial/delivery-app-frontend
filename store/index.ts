import { categoryApi } from './category/category.api';
import { restaurantReducer } from './restaurant/restaurant.slice';
import { restaurantApi } from './restaurant/restaurant.api';
import { featuredApi } from './featured/featured.api';
import { configureStore } from '@reduxjs/toolkit';
import { featuredReducer } from './featured/featured.slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[featuredApi.reducerPath]: featuredApi.reducer,
		// featured: featuredReducer,
		[restaurantApi.reducerPath]: restaurantApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		// restaurant: restaurantReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			featuredApi.middleware,
			restaurantApi.middleware,
			categoryApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
