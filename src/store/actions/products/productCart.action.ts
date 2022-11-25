import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../../@types/products';

const initialState: ProductState = {
	products: [],
	totalPrice: 0,
	priceProduct: {},
	totalItemsProduct: 0,
	countTotalProduct: {},
};

const { actions, reducer } = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addItemProductToCartAction(state, action: PayloadAction<Product>) {
			state.products = [...state.products, action.payload];

			state.totalItemsProduct = state.products.length;

			state.countTotalProduct[action.payload.id] = 1;

			state.priceProduct[action.payload.id] = Number(
				action.payload.price.split('.')[0]
			);

			state.totalPrice =
				state.totalPrice > 0
					? state.totalPrice + Number(action.payload.price.split('.')[0])
					: Number(action.payload.price.split('.')[0]);
		},

		removeItemProductToCartAction(
			state,
			action: PayloadAction<{ id: number }>
		) {
			state.totalPrice -= state.priceProduct[action.payload.id];

			state.products = state.products.filter((item) => {
				return item.id !== action.payload.id;
			});

			if (state.products.length <= 0) {
				state.totalPrice = 0;
			}
			state.totalItemsProduct = state.products.length;
		},

		addProductCount(
			state,
			action: PayloadAction<{ id: number; price: number }>
		) {
			state.countTotalProduct[action.payload.id]++;

			state.priceProduct[action.payload.id] =
				action.payload.price * state.countTotalProduct[action.payload.id];
		},

		subtractProductCount(
			state,
			action: PayloadAction<{ id: number; price: number }>
		) {
			state.countTotalProduct[action.payload.id]--;

			state.priceProduct[action.payload.id] -= action.payload.price;

			if (state.countTotalProduct[action.payload.id] <= 0) {
				state.totalPrice -= state.priceProduct[action.payload.id];
				state.priceProduct[action.payload.id] = 0;

				state.products = state.products.filter((item) => {
					return item.id !== action.payload.id;
				});
			}

			if (state.products.length <= 0) {
				state.totalPrice = 0;
			}

			state.totalItemsProduct = state.products.length;
		},

		addTotalPrice(state) {
			state.totalPrice = Object.values(state.priceProduct).reduce(
				(total, currentValue) => total + currentValue
			);
		},

		subtractTotalPrice(state, action: PayloadAction<{ price: number }>) {
			state.totalPrice -= action.payload.price;

			if (state.products.length <= 0) {
				state.totalPrice = 0;
			}
		},
	},
});

export const {
	addTotalPrice,
	addProductCount,
	subtractTotalPrice,
	subtractProductCount,
	addItemProductToCartAction,
	removeItemProductToCartAction,
} = actions;
export const productCartReducer = reducer;
