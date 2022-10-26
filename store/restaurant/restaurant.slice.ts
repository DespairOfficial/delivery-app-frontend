import { Restaurant } from '../../interfaces/restaurant.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface restaurantState {
	restaurant: Restaurant | {};
}

const initialState: restaurantState = {
	restaurant: {},
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
		},
	},
});
export const restaurantActions = restaurantSlice.actions;
export const selectRestaurant = (state) => {
	return state.restaurant.restaurant;
};
export const restaurantReducer = restaurantSlice.reducer;
