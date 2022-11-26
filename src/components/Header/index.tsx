import Image from 'next/image';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cart from '../../../public/shopping-cart.svg';

import { productsLoadingAction } from '../../store/actions/products/products.action';

import {
	Container,
	ContentBrand,
	TitleBrand,
	SubTitleBrand,
	ContentCar,
	CountProductText,
} from './styles';

import type { RootState } from '../../store/index.store';

const Header: React.FC = () => {
	const dispatcher = useDispatch();

	const productCart = useSelector(
		(appState: RootState) => appState.productCartReducer
	);

	const productsLoading = useCallback(() => {
		dispatcher(productsLoadingAction({ loading: false, open: true }));
	}, [dispatcher]);

	return (
		<Container>
			<ContentBrand>
				<TitleBrand>MKS</TitleBrand>
				<SubTitleBrand>Sistemas</SubTitleBrand>
			</ContentBrand>

			<ContentCar data-testid='content-cart' onClick={productsLoading}>
				<Image src={cart} alt='icon shopping cat' width='15' height='15' />
				<CountProductText>{productCart.totalItemsProduct}</CountProductText>
			</ContentCar>
		</Container>
	);
};

export default Header;
