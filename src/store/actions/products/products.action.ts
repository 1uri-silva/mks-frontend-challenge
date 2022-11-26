import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsApi } from '../../@types/products';

const initialState: ProductsApi = { products: [], loading: true, open: false };

const { actions, reducer } = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetchProductsAction(state, action: PayloadAction<Product[]>) {
			state.loading = true;
			state.open = false;
			state.products = action.payload;
		},

		productsLoadingAction(
			state,
			action: PayloadAction<{ loading?: boolean; open?: boolean }>
		) {
			state.loading = action.payload.loading;
			state.open = action.payload.open;
		},
	},
});

export const { fetchProductsAction, productsLoadingAction } = actions;
export const productsReducer = reducer;
