type Product = {
	id: number;
	name: string;
	brand: string;
	description: string;
	photo: string;
	price: string;
};

type ProductsApi = {
	products: Product[];
	loading: boolean;
	open: boolean;
};

type ProductState = {
	products: Product[];
	totalPrice: number;
	totalItemsProduct: number;
	priceProduct: { [key: string]: number };
	countTotalProduct: { [key: string]: number };
};

export type { Product, ProductsApi, ProductState };
