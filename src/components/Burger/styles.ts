import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	left: auto;
	background: #0f52ba;

	height: 100%;
	box-shadow: -3px 0px 5px rgba(0, 0, 0, 0.13);
	transition: transform 0.5s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

	@media (max-width: 700px) {
		width: 20rem;
	}
`;

export const StyledMenuContent = styled.div`
	height: 80%;
	overflow: auto;
	padding: 1rem;
`;

export const HeaderCarPurchase = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	padding: 2rem;
	img {
		margin-top: 1rem;
		:hover {
			cursor: pointer;
		}
	}
`;

export const CarPurchaseText = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 27px;
	line-height: 33px;
	color: #ffffff;
`;

export const ContainerTotal = styled.section`
	width: 90%;
	display: flex;
	flex-direction: row;
	padding-left: 1rem;
	padding-right: 2rem;
	justify-content: space-between;
	position: absolute;
	bottom: 5rem;
	z-index: 1000;
`;

export const TextTotal = styled.strong`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 15px;
	color: #ffffff;
`;

export const FinishPurchase = styled.button`
	background: #000000;
	margin: 0;
	width: 100%;
	height: 3rem;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 15px;
	color: #ffffff;

	position: absolute;
	bottom: 0;
	z-index: 1000;

	:hover {
		cursor: pointer;
	}
`;
