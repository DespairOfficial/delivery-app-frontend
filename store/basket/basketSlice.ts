import { Dish } from '../../interfaces/Dish.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DishState {
	items: Dish[];
}

const initialState: DishState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket(state, action) {
			state.items.push(action.payload);
		},
		removeFromBasket(state, action) {
			const index = state.items.findIndex((item)=>{
				return item.id === action.payload.id
			})
			if (index >= 0) {
				state.items.splice(index, 1);
			}
		},
	},
});

export const basketActions = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id: string) => {
	return state.basket.items.filter((item) => item.id === id);
};
export const selectBasketTotal = (state) => {
	return state.basket.items.reduce((total, item) => {
		return (total += item.price);
	}, 0);
};
export const basketReducer = basketSlice.reducer;
