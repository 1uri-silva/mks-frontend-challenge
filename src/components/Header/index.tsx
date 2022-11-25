import Image from 'next/image';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cart from '../../../public/shopping-cart.svg';
import { productsLoading } from '../../store/actions/products/products.action';
import { RootState } from '../../store/index.store';

import {
	Container,
	ContentBrand,
	TitleBrand,
	SubTitleBrand,
	ContentCar,
	CountProductText,
} from './styles';

const Header: React.FC = () => {
	const dispatcher = useDispatch();
	const productCart = useSelector(
		(appState: RootState) => appState.productCartReducer
	);

	return (
		<Container>
			<ContentBrand>
				<TitleBrand>MKS</TitleBrand>
				<SubTitleBrand>Sistemas</SubTitleBrand>
			</ContentBrand>

			<ContentCar
				data-testid='content-cart'
				onClick={() =>
					dispatcher(productsLoading({ loading: false, open: true }))
				}
			>
				<Image src={cart} alt='icon shopping cat' width='15' height='15' />
				<CountProductText>{productCart.totalItemsProduct}</CountProductText>
			</ContentCar>
		</Container>
	);
};

export default Header;
