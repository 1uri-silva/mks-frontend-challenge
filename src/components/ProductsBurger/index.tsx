import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import close from '../../../public/close_cart.svg';

import {
	addTotalPrice,
	addProductCount,
	subtractTotalPrice,
	subtractProductCount,
	removeItemProductToCartAction,
} from '../../store/actions/products/productCart.action';
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

import type { RootState } from '../../store/index.store';
import type { Product } from '../../store/@types/products';
import { useCallback } from 'react';

type PropsProduct = {
	product: Product;
};

const ProductsBurger: React.FC<PropsProduct> = ({ product }) => {
	const dispatcher = useDispatch();

	const productCart = useSelector(
		(state: RootState) => state.productCartReducer
	);

	const removeProduct = useCallback(
		(product_id: number) => {
			dispatcher(
				removeItemProductToCartAction({
					id: product_id,
				})
			);
		},
		[dispatcher]
	);

	const addProduct = useCallback(
		(product_id: number, price: string) => {
			const price_formate = Number(price.split('.')[0]);

			dispatcher(
				addProductCount({
					id: product_id,
					price: price_formate,
				})
			);
			dispatcher(addTotalPrice());
		},
		[dispatcher]
	);

	const subtractProduct = useCallback(
		(product_id: number, price: string) => {
			const price_formate = Number(price.split('.')[0]);

			dispatcher(
				subtractProductCount({
					id: product_id,
					price: price_formate,
				})
			);
			dispatcher(
				subtractTotalPrice({
					price: price_formate,
				})
			);
		},
		[dispatcher]
	);

	return (
		<Container>
			<Close
				src={close}
				alt='close cart'
				width='20'
				height='20'
				onClick={() => removeProduct(product.id)}
			/>
			<Image src={product.photo} alt='image product' width='70' height='70' />
			<NameProduct>{product.name}</NameProduct>
			<ContainerAmountPrice>
				<ContainerAmount>
					<ButtonAmount
						onClick={() => subtractProduct(product.id, product.price)}
					>
						-
					</ButtonAmount>
					<DividerAmount />
					<span>{productCart.countTotalProduct[product.id]}</span>
					<DividerAmount />
					<ButtonAmount onClick={() => addProduct(product.id, product.price)}>
						+
					</ButtonAmount>
				</ContainerAmount>

				<Price>R$ {productCart.priceProduct[product.id]}</Price>
			</ContainerAmountPrice>
		</Container>
	);
};

export default ProductsBurger;
