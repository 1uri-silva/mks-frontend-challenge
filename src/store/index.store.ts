import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { productsReducer } from './actions/products/products.action';
import { productCartReducer } from './actions/products/productCart.action';

const rootReducer = combineReducers({
	productsReducer,
	productCartReducer,
});

const store = configureStore({
	reducer: {
		productsReducer,
		productCartReducer,
	},
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { store };
