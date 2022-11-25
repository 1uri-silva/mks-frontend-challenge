import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { productsLoading } from '../../store/actions/products/products.action';

import close from '../../../public/close_cart.svg';
import { RootState } from '../../store/index.store';
import ProductsBurger from '../ProductsBurger';

import {
	StyledMenu,
	CarPurchaseText,
	HeaderCarPurchase,
	ContainerTotal,
	TextTotal,
	FinishPurchase,
	StyledMenuContent,
} from './styles';

const Burger: React.FC = () => {
	const dispatcher = useDispatch();

	const productCart = useSelector(
		(state: RootState) => state.productCartReducer
	);
	const product = useSelector((state: RootState) => state.productsReducer);

	return (
		<StyledMenu open={product.open}>
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
						onClick={() =>
							dispatcher(productsLoading({ loading: false, open: false }))
						}
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
			<FinishPurchase>Finalizar Compra</FinishPurchase>
		</StyledMenu>
	);
};

export default Burger;
