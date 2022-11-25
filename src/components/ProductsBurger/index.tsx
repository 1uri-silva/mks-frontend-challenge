import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import close from '../../../public/close_cart.svg';
import { Product } from '../../store/@types/products';
import {
	addTotalPrice,
	addProductCount,
	subtractTotalPrice,
	subtractProductCount,
	removeItemProductToCartAction,
} from '../../store/actions/products/productCart.action';
import { RootState } from '../../store/index.store';

import {
	Container,
	ContainerAmount,
	DividerAmount,
	NameProduct,
	Price,
	Close,
	ContainerAmountPrice,
	ButtonAmount,
} from './styles';

type PropsProduct = {
	product: Product;
};

const ProductsBurger: React.FC<PropsProduct> = ({ product }) => {
	const dispatcher = useDispatch();

	const productCart = useSelector(
		(state: RootState) => state.productCartReducer
	);

	return (
		<Container>
			<Close
				src={close}
				alt='close cart'
				width='20'
				height='20'
				onClick={() =>
					dispatcher(
						removeItemProductToCartAction({
							id: product.id,
						})
					)
				}
			/>
			<Image src={product.photo} alt='image product' width='70' height='70' />
			<NameProduct>{product.name}</NameProduct>
			<ContainerAmountPrice>
				<ContainerAmount>
					<ButtonAmount
						onClick={() => {
							dispatcher(
								subtractProductCount({
									id: product.id,
									price: Number(product.price.split('.')[0]),
								})
							);
							dispatcher(
								subtractTotalPrice({
									price: Number(product.price.split('.')[0]),
								})
							);
						}}
					>
						-
					</ButtonAmount>
					<DividerAmount />
					<span>{productCart.countTotalProduct[product.id]}</span>
					<DividerAmount />
					<ButtonAmount
						onClick={() => {
							dispatcher(
								addProductCount({
									id: product.id,
									price: Number(product.price.split('.')[0]),
								})
							);
							dispatcher(addTotalPrice());
						}}
					>
						+
					</ButtonAmount>
				</ContainerAmount>

				<Price>R$ {productCart.priceProduct[product.id]}</Price>
			</ContainerAmountPrice>
		</Container>
	);
};

export default ProductsBurger;
