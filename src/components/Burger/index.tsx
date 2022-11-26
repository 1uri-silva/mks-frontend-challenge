import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import close from '../../../public/close_cart.svg';

import ProductsBurger from '../ProductsBurger';

import { productsLoadingAction } from '../../store/actions/products/products.action';

import {
	StyledMenu,
	CarPurchaseText,
	HeaderCarPurchase,
	ContainerTotal,
	TextTotal,
	FinishPurchase,
	StyledMenuContent,
} from './styles';

import type { RootState } from '../../store/index.store';
import { useCallback } from 'react';

const Burger: React.FC = () => {
	const dispatcher = useDispatch();

	const productCart = useSelector(
		(state: RootState) => state.productCartReducer
	);
	const product = useSelector((state: RootState) => state.productsReducer);

	const closeBurgerCart = useCallback(() => {
		dispatcher(productsLoadingAction({ loading: false, open: false }));
	}, [dispatcher]);

	return (
		<StyledMenu open={!!product.open}>
			<StyledMenuContent>
				<HeaderCarPurchase>
					<CarPurchaseText>
						Carrinho <br />
						de Compras
					</CarPurchaseText>
					<Image
						src={close}
						alt='close cart'
						width='20'
						height='20'
						onClick={closeBurgerCart}
					/>
				</HeaderCarPurchase>

				{productCart.products?.map((productCart) => (
					<ProductsBurger
						key={productCart.id.toString()}
						product={productCart}
					/>
				))}
			</StyledMenuContent>
			<ContainerTotal>
				<TextTotal>Total:</TextTotal>
				<TextTotal>$ {productCart.totalPrice}</TextTotal>
			</ContainerTotal>
			<FinishPurchase onClick={() => alert('Compra finalizada')}>
				Finalizar Compra
			</FinishPurchase>
		</StyledMenu>
	);
};

export default Burger;
