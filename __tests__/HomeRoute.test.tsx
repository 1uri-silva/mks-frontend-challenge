import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
	productsReducer,
	fetchProductsAction,
} from '../src/store/actions/products/products.action';

import { renderWithProviders } from '../src/utils/test-utils';
import HomeRoute from '../pages';

import Products from '../src/components/Products';
import { api } from '../src/services/api';

import type { ProductsApi } from '../src/store/@types/products';

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
	jest.spyOn(api, 'get').mockImplementation(() =>
		Promise.resolve({
			data: {
				products: [product],
			},
		})
	);

	it('it should be able to renders a Home Route', async () => {
		const previousState: ProductsApi = {
			products: [],
			loading: true,
			open: false,
		};

		const { getByText } = renderWithProviders(<HomeRoute />);

		const element = getByText('MKS');

		await waitFor(() => {
			expect(api.get).toHaveBeenCalled();
			expect(
				productsReducer(previousState, fetchProductsAction([product]))
			).toEqual({
				loading: true,
				open: false,
				products: [product],
			});
			expect(element).toBeInTheDocument();
		});
	});

	it('should be able to render component Products', async () => {
		const previousState: ProductsApi = {
			products: [],
			loading: true,
			open: false,
		};

		const { findByTestId } = renderWithProviders(
			<Products products={product} />
		);
		const element = await findByTestId('product-container');
		const elementButton = await findByTestId('purchase-button');

		userEvent.click(elementButton);

		expect(element).toBeTruthy();

		expect(
			productsReducer(previousState, fetchProductsAction([product]))
		).toEqual({
			loading: true,
			open: false,
			products: [product],
		});
	});
});
