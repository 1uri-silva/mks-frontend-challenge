import styled from 'styled-components';

export const ContainerShadow = styled.div`
	background: #ffffff;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
	border-radius: 8px;
	margin: 1rem;
`;

export const Container = styled.div`
	width: 10rem;
	height: 15rem;
	padding: 1rem;

	@media (max-width: 600px) {
		width: 15rem;
		height: 12rem;
		padding: 1rem;
	}
`;

export const ContainerProduct = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ProductName = styled.strong`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 300;
	line-height: 19px;
	color: #2c2c2c;
	font-size: 16px;
`;

export const ContentPrice = styled.div`
	background: #373737;
	border-radius: 5px;
	width: 5.7rem;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Price = styled.strong`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 15px;
	color: #ffffff;
`;

export const ProductDescription = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 300;
	font-size: 10px;
	line-height: 12px;
	color: #2c2c2c;
`;

export const ButtonPurchase = styled.button`
	background: #0f52ba;
	width: 100%;
	height: 2rem;
	align-items: center;
	display: flex;
	justify-content: center;
	border-radius: 0px 0px 8px 8px;

	:hover {
		cursor: pointer;
	}
`;

export const PurchaseText = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
	margin-left: 0.5rem;
`;
