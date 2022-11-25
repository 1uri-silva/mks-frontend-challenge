import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	width: 100vw;
	height: 13vh;
	flex-direction: row;
	background: #0f52ba;
	justify-content: space-between;
	align-items: center;
`;

export const ContentBrand = styled.div`
	display: flex;
	width: 15rem;
	flex-direction: row;
	background: transparent;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-left: 1rem;

	@media (min-width: 700px) {
		margin-left: 4rem;
	}
`;

export const TitleBrand = styled.h2`
	font-family: 'Montserrat';
	font-size: 40px;
	font-style: normal;
	font-weight: 600;
	color: #ffffff;
	line-height: 19px;
`;

export const SubTitleBrand = styled.span`
	font-family: 'Montserrat';
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	color: #ffffff;
	line-height: 19px;
	margin-left: 0.4rem;
	margin-top: 0.5rem;
`;

export const ContentCar = styled.button`
	width: 5rem;
	height: 2rem;
	background: #ffffff;
	border-radius: 8px;
	margin-right: 2rem;

	:hover {
		cursor: pointer;
	}

	@media (min-width: 700px) {
		margin-right: 5rem;
	}
`;

export const CountProductText = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	margin-left: 0.9rem;
`;
