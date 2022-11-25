import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';

import HomeRoute from '../pages/HomeRoute';
import { api } from '../src/services/api';
import { renderWithProviders } from '../src/utils/test-utils';

describe('Home Route', () => {
	jest
		.spyOn(api, 'get')
		.mockImplementation(() => Promise.resolve({ data: {} }));

	it('renders a Home Route', async () => {
		const { getByText } = renderWithProviders(<HomeRoute />);

		const element = getByText('MKS');

		await waitFor(() => {
			expect(api.get).toHaveBeenCalled();
			expect(element).toBeInTheDocument();
		});
	});
});
