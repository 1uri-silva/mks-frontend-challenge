import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
	border-radius: 8px;

	display: flex;
	flex-direction: row;
	width: 15rem;
	margin: 1rem;
	padding: 1rem;
	align-items: center;
	justify-content: center;

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Close = styled(Image)`
	position: relative;
	left: 16.2rem;
	bottom: 3rem;

	:hover {
		cursor: pointer;
	}

	@media (max-width: 700px) {
		position: relative;
		left: 8.3rem;
		bottom: 1.3rem;
	}
`;

export const NameProduct = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 17px;
	color: #2c2c2c;
	margin-left: 1rem;
`;

export const ContainerAmountPrice = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
`;

export const ContainerAmount = styled.div`
	background: #ffffff;
	border: 0.3px solid #bfbfbf;
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	margin-left: 0.5rem;
	justify-content: space-evenly;

	span {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
	}

	@media (max-width: 700px) {
		width: 6rem;
		height: 2rem;
		margin: 1rem;
		align-items: center;
		justify-content: space-evenly;
	}
`;

export const DividerAmount = styled.div`
	border: 0.2px solid #bfbfbf;
`;

export const ButtonAmount = styled.button`
	border: 0;
	border-radius: 4px;
	background: transparent;
	:hover {
		cursor: pointer;
	}
`;

export const Price = styled.strong`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	margin-left: 2rem;

	@media (max-width: 700px) {
		background: #373737;
		border-radius: 5px;
		width: 4rem;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
	}
`;
