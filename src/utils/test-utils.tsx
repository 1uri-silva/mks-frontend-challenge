import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';

import type { AppStore, RootState } from '../store/index.store';
import { productsReducer } from '../store/actions/products/products.action';
import { productCartReducer } from '../store/actions/products/productCart.action';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = configureStore({
			reducer: { productsReducer, productCartReducer },
			preloadedState,
		}),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
