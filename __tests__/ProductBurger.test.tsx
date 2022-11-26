import userEvent from '@testing-library/user-event';

import {
	productCartReducer,
	addTotalPrice,
	subtractTotalPrice,
	addProductCount,
	subtractProductCount,
	addItemProductToCartAction,
	removeItemProductToCartAction,
} from '../src/store/actions/products/productCart.action';

import { renderWithProviders } from '../src/utils/test-utils';

import ProductsBurger from '../src/components/ProductsBurger';

import type { ProductState } from '../src/store/@types/products';
import { act } from '@testing-library/react';

const product = {
	id: 8,
	name: 'Headset Cloud Stinger',
	brand: 'HyperX',
	description:
		'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
	photo:
		'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
	price: '600.00',
	createdAt: '2022-08-21T19:30:29.567Z',
	updatedAt: '2022-08-21T19:30:29.567Z',
};

describe('Home Route', () => {
	it('should be able to render Products component', async () => {
		renderWithProviders(<ProductsBurger product={product} />);
	});

	it('should be able to add Products cart', async () => {
		renderWithProviders(<ProductsBurger product={product} />);

		const { store } = renderWithProviders(<ProductsBurger product={product} />);

		const spy = jest.spyOn(store, 'dispatch');

		act(() => {
			store.dispatch(addItemProductToCartAction(product));
		});

		expect(spy).toHaveBeenCalledWith(addItemProductToCartAction(product));
	});

	it('should be able to remove Products cart', async () => {
		const { store } = renderWithProviders(<ProductsBurger product={product} />);

		const spy = jest.spyOn(store, 'dispatch');

		act(() => {
			store.dispatch(
				removeItemProductToCartAction({
					id: product.id,
				})
			);
		});

		expect(spy).toHaveBeenCalledWith(
			removeItemProductToCartAction({
				id: product.id,
			})
		);
	});

	it('should be able to add Count Products cart', async () => {
		const previousState: ProductState = {
			countTotalProduct: { [product.id]: 1 },
			priceProduct: { [product.id]: 600 },
			products: [product],
			totalItemsProduct: 1,
			totalPrice: 600,
		};

		renderWithProviders(<ProductsBurger product={product} />);

		expect(
			productCartReducer(
				previousState,
				addProductCount({
					id: product.id,
					price: Number(product.price.split('.')[0]),
				})
			)
		).toEqual({
			countTotalProduct: { [product.id]: 2 },
			priceProduct: { [product.id]: 1200 },
			products: [product],
			totalItemsProduct: 1,
			totalPrice: 600,
		});
	});

	it('should be able to subtract Count Products cart', async () => {
		const previousState: ProductState = {
			countTotalProduct: { [product.id]: 2 },
			priceProduct: { [product.id]: 1200 },
			products: [product],
			totalItemsProduct: 2,
			totalPrice: 600,
		};

		renderWithProviders(<ProductsBurger product={product} />);

		expect(
			productCartReducer(
				previousState,
				subtractProductCount({
					id: product.id,
					price: Number(product.price.split('.')[0]),
				})
			)
		).toEqual({
			countTotalProduct: { [product.id]: 1 },
			priceProduct: { [product.id]: 600 },
			products: [product],
			totalItemsProduct: 1,
			totalPrice: 600,
		});
	});

	it('should be able to add Total Price Products cart', async () => {
		const previousState: ProductState = {
			countTotalProduct: { [product.id]: 2 },
			priceProduct: { [product.id]: 1200 },
			products: [product],
			totalItemsProduct: 2,
			totalPrice: 600,
		};

		renderWithProviders(<ProductsBurger product={product} />);

		expect(productCartReducer(previousState, addTotalPrice())).toEqual({
			countTotalProduct: { [product.id]: 2 },
			priceProduct: { [product.id]: 1200 },
			products: [product],
			totalItemsProduct: 2,
			totalPrice: 1200,
		});
	});

	it('should be able to subtract Total Price Products cart', async () => {
		const previousState: ProductState = {
			countTotalProduct: { [product.id]: 1 },
			priceProduct: { [product.id]: 600 },
			products: [product],
			totalItemsProduct: 1,
			totalPrice: 600,
		};

		renderWithProviders(<ProductsBurger product={product} />);

		expect(
			productCartReducer(
				previousState,
				subtractTotalPrice({ price: Number(product.price.split('.')[0]) })
			)
		).toEqual({
			countTotalProduct: { [product.id]: 1 },
			priceProduct: { [product.id]: 600 },
			products: [product],
			totalItemsProduct: 1,
			totalPrice: 0,
		});
	});
});
