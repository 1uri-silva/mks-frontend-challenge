import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { productsLoading } from '../src/store/actions/products/products.action';
import { renderWithProviders } from '../src/utils/test-utils';
import Products from '../src/components/Products';

const products = {
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

describe('Products Component', () => {
	it('renders a Products Component', async () => {
		const { getByText } = renderWithProviders(<Products products={products} />);

		const element = getByText('COMPRAR');

		expect(element).toBeInTheDocument();
	});
});
