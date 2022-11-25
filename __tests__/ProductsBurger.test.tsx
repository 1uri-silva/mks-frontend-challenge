import '@testing-library/jest-dom';

import ProductsBurger from '../src/components/ProductsBurger';
import { renderWithProviders } from '../src/utils/test-utils';

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

describe('Products Burger Component', () => {
	it('renders a Products Burger Component', async () => {
		const { getByAltText } = renderWithProviders(
			<ProductsBurger product={products} />
		);

		const element = getByAltText('close cart');
		expect(element).toBeInTheDocument();
	});
});
