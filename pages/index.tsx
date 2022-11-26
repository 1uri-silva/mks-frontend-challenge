import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Products from '../src/components/Products';
import Burger from '../src/components/Burger';

import { api } from '../src/services/api';
import { RootState } from '../src/store/index.store';
import {
	fetchProductsAction,
	productsLoadingAction,
} from '../src/store/actions/products/products.action';

import { Container, Content } from '../styles/styles';
import 'react-loading-skeleton/dist/skeleton.css';

import { Product } from '../src/store/@types/products';

const Home: React.FC = () => {
	const dispatcher = useDispatch();

	const product = useSelector((state: RootState) => state.productsReducer);

	useEffect(() => {
		(() => {
			api
				.get<{ products: Product[] }>(
					'/products?page=1&rows=5&sortBy=id&orderBy=DESC'
				)
				.then(({ data }) => {
					dispatcher(fetchProductsAction(data.products));
					dispatcher(productsLoadingAction({ loading: false, open: false }));
				});
		})();
	}, [dispatcher]);

	return (
		<Container>
			<Header />
			<Content>
				{product.loading ? (
					<Skeleton count={3} className='loading-skeleton' />
				) : (
					product.products?.map((products) => (
						<Products key={products.id.toString()} products={products} />
					))
				)}
			</Content>
			<Burger />
			<Footer />
		</Container>
	);
};

export default Home;
