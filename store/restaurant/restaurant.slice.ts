import { Restaurant } from './../../interfaces/Restaurant.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface restaurantState {
	restaurants: Array<Restaurant>;
}

const initialState: restaurantState = {
	restaurants: [],
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		addRestaurantReducer(state, action: PayloadAction<Restaurant>) {
			state.restaurants.push(action.payload);
		},
	},
});
export const restaurantActions = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
