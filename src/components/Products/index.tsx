import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { productsLoading } from '../../store/actions/products/products.action';

import bag from '../../../public/shopping-bag.svg';
import { Product } from '../../store/@types/products';
import { addItemProductToCartAction } from '../../store/actions/products/productCart.action';

import {
	Container,
	ContainerShadow,
	ContentPrice,
	Price,
	ContainerProduct,
	ProductDescription,
	ProductName,
	ButtonPurchase,
	PurchaseText,
} from './styles';

const Products: React.FC<{ products: Product }> = ({ products }) => {
	const dispatcher = useDispatch();

	return (
		<ContainerShadow>
			<Container>
				<Image
					src={products.photo}
					alt={'image-' + products.name}
					width='100'
					height='100'
				/>
				<ContainerProduct>
					<ProductName>{products.name}</ProductName>
					<ContentPrice>
						<Price>R$ {products.price.split('.')[0]}</Price>
					</ContentPrice>
				</ContainerProduct>

				<ProductDescription>{products.description}</ProductDescription>
			</Container>
			<ButtonPurchase
				data-testid='purchase button'
				onClick={() => {
					dispatcher(productsLoading({ loading: false, open: true }));
					dispatcher(addItemProductToCartAction(products));
				}}
			>
				<Image src={bag} alt='icon shopping bag' width='15' height='15' />
				<PurchaseText>COMPRAR</PurchaseText>
			</ButtonPurchase>
		</ContainerShadow>
	);
};

export default Products;
