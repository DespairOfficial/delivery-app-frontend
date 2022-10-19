import { Featured } from '../../interfaces/Featured.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface featuredState {
	featured: Array<Featured>;
}

const initialState: featuredState = {
	featured: [],
};
export const featuredSlice = createSlice({
	name: 'featured',
	initialState,
	reducers: {
		addFeaturedReducer(state, action: PayloadAction<Featured>) {
			state.featured.push(action.payload);
		},
	},
});
export const featuredActions = featuredSlice.actions;
export const featuredReducer = featuredSlice.reducer;
