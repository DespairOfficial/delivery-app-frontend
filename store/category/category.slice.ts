import { Category } from '../../interfaces/Category.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface categoryState {
	category: Array<Category>;
}

const initialState: categoryState = {
	category: [],
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		addCategoryReducer(state, action: PayloadAction<Category>) {
			state.category.push(action.payload);
		},
	},
});
export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
