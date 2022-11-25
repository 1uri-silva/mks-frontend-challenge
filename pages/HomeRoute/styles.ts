import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: auto;
	overflow-x: hidden;
`;

export const Content = styled.section`
	width: 50vw;
	display: grid;
	margin-left: calc(100vw / 6);

	grid-template-rows: repeat(1, 1fr);

	@media (min-width: 667px) {
		grid-template-columns: repeat(2, 1fr);
		margin-left: calc(100vw / 5);
	}

	@media (min-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}

	.loading-skeleton {
		width: 70vw;
		height: 12vh;
		margin-top: 2rem;
	}
`;
